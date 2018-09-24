
export interface IGoogleBooksApiResponse {
    Kind: string;
    Items: string[];
    TotalItems: number;
}

export class GoogleBooksApiResponse {
    public kind: string;
    public items: string[];
    public totalItems: number;


    public static fromResponse(response: IGoogleBooksApiResponse): GoogleBooksApiResponse {
        var tmp = JSON.parse(JSON.stringify(response));
        let res: GoogleBooksApiResponse = {
            kind: tmp.kind,
            items: tmp.items,
            totalItems: tmp.totalItems
        }
        return res;
    }

    public static fromArrayResponse(response: IGoogleBooksApiResponse[]): GoogleBooksApiResponse[] {
        let res = [];
        for (let iGBook of response) {
            res.push(GoogleBooksApiResponse.fromResponse(iGBook));
        }
        return res;
    }
}