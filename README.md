# SpaceX Launch Tracker

A modern, space-themed Angular web application for exploring SpaceX launches, missions, and company information.

## Features

- 🚀 **Comprehensive Launch Information**: View next, latest, upcoming, past, and all SpaceX launches
- 🎨 **Modern Space-Themed UI**: Beautiful, responsive design with animated starfield background
- 📊 **Company Information**: Detailed SpaceX company stats and leadership information
- 🔍 **Mission Details**: Explore detailed mission information with timelines and specifications
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Angular 7**: Frontend framework
- **TypeScript**: Programming language
- **RxJS**: Reactive programming for API calls
- **SpaceX API v4**: Data source for launch and mission information

## Getting Started

### Prerequisites

- Node.js (v10.x or higher)
- npm (v6.x or higher)
- Angular CLI (v7.3.9)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spaceX
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
ng serve
```

4. Navigate to `http://localhost:4200/` in your browser

### Build for Production

```bash
npm run build:prod
# or
ng build --configuration production
```

## Project Structure

```
src/
├── app/
│   ├── component/          # Shared components (navbar, etc.)
│   ├── models/             # TypeScript models/interfaces
│   ├── modules/            # Feature modules
│   │   ├── company/        # Company information module
│   │   ├── launches/       # Launches module
│   │   └── missions/       # Missions module
│   ├── shared/             # Shared components (loaders, SVGs)
│   ├── util/               # Utility services
│   └── views/              # View components
├── assets/                 # Static assets (images, icons)
└── styles.css              # Global styles
```

## API Information

This application uses the [SpaceX REST API](https://docs.spacexdata.com/). The API is free and open, requiring no authentication.

### API Endpoints Used

- `/v4/launches` - All launches
- `/v4/launches/next` - Next launch
- `/v4/launches/latest` - Latest launch
- `/v4/launches/upcoming` - Upcoming launches
- `/v4/launches/past` - Past launches
- `/v4/company` - Company information
- `/v4/payloads` - Payload/mission information

**Note**: The SpaceX API v4 uses a different structure than v3 (references instead of nested objects). If you encounter issues, you may need to use v3 endpoints or implement reference resolution for v4.

## Development

### Running Tests

```bash
npm test
# or
ng test
```

### Linting

```bash
npm run lint
# or
ng lint
```

## Recent Updates

- ✅ Fixed npm install issues (removed problematic postinstall script)
- ✅ Updated to SpaceX API v4 endpoints
- ✅ Modernized UI with space-themed design
- ✅ Improved routing and navigation
- ✅ Enhanced launch details display
- ✅ Added comprehensive error handling
- ✅ Responsive design improvements

## Future Enhancements

- [ ] Add filtering and search functionality
- [ ] Implement countdown timers for upcoming launches
- [ ] Add more SpaceX modules (Rockets, Ships, Capsules, etc.)
- [ ] Implement caching for API responses
- [ ] Add unit and e2e tests
- [ ] Upgrade to latest Angular version

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [SpaceX](https://www.spacex.com/) for the amazing API
- [SpaceX API Documentation](https://docs.spacexdata.com/)
