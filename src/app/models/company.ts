export class Company {
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    headquarters: CompanyHeadquarters;
    links: CompanyLinks;
    summary: string;

}

export class CompanyHeadquarters {
    address: string;
    city: string;
    state: string;
}

export class CompanyLinks {
    website: string;
    flickr: string
    twitter: string;
    elon_twitter: string;
}