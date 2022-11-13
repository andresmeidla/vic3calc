// These are all the highest-level production methods
let default_pms = [
    'pm_baking_powder',
    'pm_vacuum_canning',
    'pm_patent_stills',
    'pm_automated_bakery',
    'pm_worker_cooperative_building_food_industry',
    'pm_electric_sewing_machines',
    'pm_elastics',
    'pm_automatic_power_looms',
    'pm_worker_cooperative_building_textile_mills',
    'pm_mechanized_workshops',
    'pm_precision_tools',
    'pm_assembly_lines_building_furniture_manufacturies',
    'pm_worker_cooperative_building_furniture_manufacturies',
    'pm_steel',
    'pm_assembly_lines_building_tooling_workshops',
    'pm_worker_cooperative_building_tooling_workshops',
    'pm_houseware_plastics',
    'pm_bone_china',
    'pm_automatic_bottle_blowers',
    'pm_worker_cooperative_building_glassworks',
    'pm_bleached_paper',
    'pm_rotary_valve_engine_building_paper_mills',
    'pm_worker_cooperative_building_paper_mills',
    'pm_nitrogen_fixation',
    'pm_brine_electrolysis',
    'pm_worker_cooperative_industry',
    'pm_dye_production',
    'pm_rayon',
    'pm_electric_arc_process',
    'pm_rotary_valve_engine_building_steel_mills',
    'pm_diesel_engines',
    'pm_automobile_production',
    'pm_assembly_lines_building_motor_industry',
    'pm_arc_welding_shipbuilding',
    'pm_military_shipbuilding_steam_2',
    'pm_worker_cooperative_building_shipyards',
    'pm_aeroplane_production',
    'pm_tank_production',
    'pm_telephones',
    'pm_radios',
    'pm_bolt_action_rifles',
    'pm_breech_loaders',
    'pm_worker_cooperative_building_arms_industry',
    'pm_explosive_shells',
    'pm_chemical_fertilizer',
    'pm_apple_orchards',
    'pm_compression_ignition_tractors',
    'pm_worker_cooperative_farm',
    'pm_vineyards',
    'pm_chemical_fertilizer_building_rice_farm',
    'pm_fig_orchards',
    'pm_steam_threshers',
    'pm_vineyards_building_maize_farm',
    'pm_intensive_grazing_ranch',
    'pm_mechanized_slaughtering',
    'pm_electric_fencing',
    'pm_refrigerated_rail_cars_building_livestock_ranch',
    'pm_diesel_pump_building_coal_mine',
    'pm_dynamite_building_coal_mine',
    'pm_steam_donkey_building_coal_mine',
    'pm_rail_transport_mine',
    'pm_worker_cooperative_building_coal_mine',
    'pm_diesel_pump_building_iron_mine',
    'pm_dynamite_building_iron_mine',
    'pm_steam_donkey_mine',
    'pm_worker_cooperative_building_iron_mine',
    'pm_diesel_pump_building_lead_mine',
    'pm_dynamite_building_lead_mine',
    'pm_worker_cooperative_building_lead_mine',
    'pm_diesel_pump_building_sulfur_mine',
    'pm_dynamite_building_sulfur_mine',
    'pm_worker_cooperative_building_sulfur_mine',
    'pm_diesel_pump_building_gold_mine',
    'pm_dynamite_building_gold_mine',
    'pm_worker_cooperative_building_gold_mine',
    'default_building_gold_fields',
    'automatic_irrigation_building_coffee_plantation',
    'pm_steam_rail_transport',
    'pm_worker_cooperative_plantation',
    'automatic_irrigation_building_cotton_plantation',
    'automatic_irrigation_building_dye_plantation',
    'automatic_irrigation_building_opium_plantation',
    'automatic_irrigation_building_tea_plantation',
    'automatic_irrigation_building_tobacco_plantation',
    'automatic_irrigation_building_sugar_plantation',
    'automatic_irrigation_building_banana_plantation',
    'automatic_irrigation_building_silk_plantation',
    'pm_mechanized_infantry',
    'pm_siege_artillery',
    'pm_aerial_recon',
    'pm_chemical_weapons_specialists',
    'pm_mechanized_infantry_conscription',
    'pm_siege_artillery_conscription',
    'pm_aerial_recon_conscription',
    'pm_chemical_weapons_specialists_conscription',
    'pm_field_hospitals',
    'pm_battleships',
    'pm_carriers',
    'pm_submarine',
    'pm_battlefleet_tactics',
    'pm_arcades',
    'pm_electric_streetlights',
    'pm_public_motor_carriages',
    'pm_free_urban_clergy',
    'pm_film_art',
    'pm_independent_artists',
    'pm_oil-fired_plant',
    'pm_modern_port',
    'pm_switch_boards',
    'pm_professional_bureaucrats',
    'pm_secular_bureaucrats',
    'pm_analytical_philosophy_department',
    'pm_secular_academia',
    'pm_skyscraper_bureaucratic_nexus',
    'pm_airship_mooring_post',
    'pm_monument_no_effects',
    'pm_electric_saw_mills',
    'pm_hardwood',
    'pm_chainsaws',
    'pm_log_carts',
    'pm_worker_cooperative_building_logging_camp',
    'default_building_rubber_plantation',
    'pm_steam_trawlers',
    'pm_flash_freezing_building_fishing_wharf',
    'pm_worker_cooperative_building_fishing_wharf',
    'pm_steam_whaling_ships',
    'pm_flash_freezing_building_whaling_station',
    'pm_worker_cooperative_building_whaling_station',
    'pm_combustion_derricks',
    'pm_tanker_cars',
    'pm_canal',
    'pm_diesel_trains',
    'pm_steel_passenger_carriages',
    'pm_worker_cooperative_building_railway',
    'pm_trade_center',
    'pm_trade_center_government_run',
    'pm_arc_welded_buildings'
]

// These are all goods that can be produced by multiple buildings
const conflicts = [
    'building_output_sugar_add',
    'building_output_oil_add',
    'building_output_fabric_add',
    'building_output_grain_add',
    'building_output_silk_add',
    'building_output_dye_add',
    'building_output_fertilizer_add',
    'building_output_fruit_add',
    'building_output_liquor_add',
    'building_output_wine_add'
]

// These are the buildings that will be chosen in the above context
// It would be appropiate to let the user change his preferences (e.g. playing as sweden, you can have no silk farms)
let preferences = new Map();
preferences.set('building_output_sugar_add', 'building_sugar_plantation')
preferences.set('building_output_oil_add', 'building_oil_rig')
preferences.set('building_output_fabric_add', 'building_cotton_plantation')
preferences.set('building_output_grain_add', 'building_wheat_farm')
preferences.set('building_output_silk_add', 'building_silk_plantation')
preferences.set('building_output_dye_add', 'building_dye_plantation')
preferences.set('building_output_fertilizer_add', 'building_chemical_plants')
preferences.set('building_output_fruit_add', 'building_wheat_farm')
preferences.set('building_output_liquor_add', 'building_food_industry')
preferences.set('building_output_wine_add', 'building_wheat_farm')