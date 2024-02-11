export interface OpenFoodFactsResponse {
  /**
   * The looked up barcode.
   */
  code: string;

  product: Product;

  /**
   * The status of the request.
   *
   * 0: The product was found.
   * 1: The product was not found.
   */
  status: number;

  /**
   * The status of the request.
   *
   * "no code or invalid code": The product was found.
   * "product found": The product was not found.
   */
  status_verbose: string;
}

export interface Product {
  _id: string;
  _keywords: string[];
  added_countries_tags: any[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: any[];
  allergens_tags: any[];
  brands: string;
  brands_tags: string[];
  categories_properties: CategoriesProperties;
  categories_properties_tags: string[];
  checkers_tags: any[];
  code: string;
  codes_tags: string[];
  complete: number;
  completeness: number;
  correctors_tags: any[];
  countries: string;
  countries_hierarchy: string[];
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_tags: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors_tags: string[];
  entry_dates_tags: string[];
  food_groups_tags: any[];
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags: string[];
  interface_version_created: string;
  interface_version_modified: string;
  lang: string;
  languages: Languages;
  languages_codes: LanguagesCodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  main_countries_tags: any[];
  max_imgid: string;
  misc_tags: string[];
  nova_group_debug: string;
  nova_group_error: string;
  nova_groups_tags: string[];
  nutrient_levels: CategoriesProperties;
  nutrient_levels_tags: any[];
  nutriments: CategoriesProperties;
  nutrition_data_per: string;
  nutrition_data_prepared_per: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_no_fiber: number;
  packaging_materials_tags: any[];
  packaging_recycling_tags: any[];
  packaging_shapes_tags: any[];
  packagings: any[];
  packagings_materials: CategoriesProperties;
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  product_name: string;
  product_name_de: string;
  quantity: string;
  removed_countries_tags: any[];
  rev: number;
  selected_images: SelectedImages;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: any[];
  traces_tags: any[];
  unknown_nutrients_tags: any[];
  weighers_tags: any[];
}

export interface CategoriesProperties {}

export interface EcoscoreData {
  adjustments: Adjustments;
  agribalyse: Agribalyse;
  missing: Missing;
  missing_agribalyse_match_warning: number;
  missing_key_data: number;
  scores: CategoriesProperties;
  status: string;
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients;
  packaging: Packaging;
  production_system: ProductionSystem;
  threatened_species: Agribalyse;
}

export interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[];
  epi_score: number;
  epi_value: number;
  origins_from_origins_field: string[];
  transportation_score: number;
  transportation_scores: { [key: string]: number };
  transportation_value: number;
  transportation_values: { [key: string]: number };
  value: number;
  values: { [key: string]: number };
  warning: string;
}

export interface AggregatedOrigin {
  epi_score: string;
  origin: string;
  percent: number;
  transportation_score: null;
}

export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number;
  value: number;
  warning: string;
}

export interface ProductionSystem {
  labels: any[];
  value: number;
  warning: string;
}

export interface Agribalyse {
  warning: string;
}

export interface Missing {
  categories: number;
  ingredients: number;
  labels: number;
  origins: number;
  packagings: number;
}

export interface Images {
  '1': The1;
  front_de: FrontDe;
}

export interface The1 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}

export interface Sizes {
  '100': The100;
  '400': The100;
  full: The100;
  '200'?: The100;
}

export interface The100 {
  h: number;
  w: number;
}

export interface FrontDe {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: null;
  rev: string;
  sizes: Sizes;
  white_magic: null;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

export interface Languages {
  'en:german': number;
}

export interface LanguagesCodes {
  de: number;
}

export interface SelectedImages {
  front: Front;
}

export interface Front {
  display: Display;
  small: Display;
  thumb: Display;
}

export interface Display {
  de: string;
}
