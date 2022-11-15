interface IHighestTree {
    height: number,
    individual_tree_id: number
}
export interface IHighestTrees {
    year: string,
    highest_trees: IHighestTree[]
}

export interface IMethods {
    method: 'PowerCoat' | 'Mycorrhiza' | 'Fencing'
}