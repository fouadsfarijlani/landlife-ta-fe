interface IHighestTree {
    height: number,
    individual_tree_id: number
}
export interface IHighestTrees {
    year: string,
    highest_trees: IHighestTree[]
}

export interface ISpecies {
    tree_species_id: number,
    latin_name: string,
}

export interface IBestMethodForSpecies {
    tree_species_id: number,
    latin_name: string,
    best_method: string,
    health_avg: number,
}