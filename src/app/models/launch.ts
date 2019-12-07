export class Launch {
    flight_number: number;
    mission_name: string;
    mission_id: number[];
    launch_year: number;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: LaunchRocket;
    ships: string[];
    telemetry: LaunchTelemetry;
    launch_site: Launch_LaunchSite;
    launch_success: boolean;
    details: string;
    upcoming: boolean;
    static_fire_date_utc: string;
    static_fire_date_unix: string;
    timeline: LaunchTimeline;
    crew: string;
}


export class LaunchRocket {
    rocket_id: string;
    rorocket_name: string;
    rocket_type: string;
    first_stage: LaunchRocket1stStage;
    second_stage: LaunchRocket2ndStage;
    fairings: LaunchRocketFairings;

}

export class LaunchRocket1stStage {
    core: LaunchRocket1stStageCore[];
}

export class LaunchRocket1stStageCore {
    core_serial: string;
    flight: number;
    block: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: string;
}

export class LaunchRocket2ndStage {
    block: number;
    payloads: LaunchRocket2ndStagePayloads[];
}

export class LaunchRocketFairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: string;
}

export class LaunchTelemetry {
    flight_club: string;
}

export class Launch_LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

export class LaunchTimeline {
    webcast_liftoff: number;
    go_for_prop_loading: number;
    rp1_loading: number;
    stage1_lox_loading: number;
    stage2_lox_loading: number;
    engine_chill: number;
    prelaunch_checks: number;
    propellant_pressurization: number;
    go_for_launch: number;
    ignition: number;
    liftoff: number;
    maxq: number;
    meco: number;
    stage_sep: number;
    second_stage_ignition: number;
    fairing_deploy: number;
    "seco-1": number;
    second_stage_restart: number;
    "seco-2": number;
    payload_deploy: number;

}
export class LaunchRocket2ndStagePayloads {
    payload_id: string;
    norad_id: string[];
    reused: boolean;
    customers: string[];
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    orbit_params: LaunchRocket2ndStagePayloadsOrbitParams;
    uid: string;
}

export class LaunchRocket2ndStagePayloadsOrbitParams {
    reference_system: string;
    regime: string;
    longitude: number;
    semi_major_axis_km: number;
    eccentricity: number;
    periapsis_km: number;
    apoapsis_km: number;
    inclination_deg: number;
    period_min: number;
    lifespan_years: number;
    epoch: number;
    mean_motion: number;
    raan: number;
    arg_of_pericenter: number;
    mean_anomaly: number;
}
// <mydate>{{item.date * 1000 | date:'yyyy-MM-dd HH:mm:ss Z'}}</mydate> date conversion using pipe