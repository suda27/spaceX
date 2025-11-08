import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaunchesService } from 'src/app/modules/launches/launches.service';
import { Launch } from 'src/app/models/launch';

@Component({
  selector: 'spacex-launches-view',
  templateUrl: './launches-view.component.html',
  styleUrls: ['./launches-view.component.css']
})
export class LaunchesViewComponent implements OnInit {

  viewType: string;
  launchInfo: Launch | undefined;
  launchesList: Launch[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private launchSvc: LaunchesService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.viewType = data.viewType || this.route.snapshot.url[1]?.path || 'next';
      this.loadData();
    });
  }

  loadData() {
    this.loading = true;
    this.error = null;

    switch (this.viewType) {
      case 'next':
        this.launchSvc.getNextLaunchInfo().subscribe({
          next: (launchInfo) => {
            this.launchInfo = launchInfo;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load next launch information';
            this.loading = false;
            console.error(err);
          }
        });
        break;

      case 'latest':
        this.launchSvc.getLatestLaunchInfo().subscribe({
          next: (launchInfo) => {
            this.launchInfo = launchInfo;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load latest launch information';
            this.loading = false;
            console.error(err);
          }
        });
        break;

      case 'upcoming':
        this.launchSvc.getUpcomingLaunchInfo().subscribe({
          next: (launchInfo) => {
            // Upcoming can return single or array
            if (Array.isArray(launchInfo)) {
              this.launchesList = launchInfo;
            } else {
              this.launchInfo = launchInfo;
            }
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load upcoming launches';
            this.loading = false;
            console.error(err);
          }
        });
        break;

      case 'past':
        this.launchSvc.getpastLaunchInfo().subscribe({
          next: (launches) => {
            this.launchesList = launches;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load past launches';
            this.loading = false;
            console.error(err);
          }
        });
        break;

      case 'all':
        this.launchSvc.getAllLaunchInfo().subscribe({
          next: (launches) => {
            this.launchesList = launches;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load all launches';
            this.loading = false;
            console.error(err);
          }
        });
        break;

      case 'single':
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.launchSvc.getSingleLaunchInfo(+id).subscribe({
            next: (launchInfo) => {
              this.launchInfo = launchInfo;
              this.loading = false;
            },
            error: (err) => {
              this.error = 'Failed to load launch information';
              this.loading = false;
              console.error(err);
            }
          });
        }
        break;

      default:
        this.loading = false;
        this.error = 'Invalid view type';
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  goBack() {
    this.router.navigate(['/launches']);
  }
}
