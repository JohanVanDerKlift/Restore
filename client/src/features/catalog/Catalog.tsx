import ProductList from "./ProductList.tsx";
import {useFetchFiltersQuery, useFetchProductsQuery} from "./catalogApi.ts";
import {Grid2, Typography} from "@mui/material";
import FIlters from "./Filters.tsx";
import {useAppDispatch, useAppSelector} from "../../app/store/store.ts";
import AppPagination from "../../app/shared/components/AppPagination.tsx";
import {setPageNumber} from "./catalogSlice.ts";

export default function Catalog() {
    const productParams = useAppSelector(state => state.catalog);
    const {data, isLoading} = useFetchProductsQuery(productParams);
    const {data: filtersData, isLoading: filtersLoading} = useFetchFiltersQuery();
    const dispatch = useAppDispatch();

    if (isLoading || !data || filtersLoading || !filtersData) return <div>Loading...</div>

    return (
        <Grid2 container spacing={4}>
            <Grid2 size={3}>
                <FIlters filtersData={filtersData}/>
            </Grid2>
            <Grid2 size={9}>
                {data.items && data.items.length > 0 ? (
                    <>
                        <ProductList products={data.items} />
                        <AppPagination
                            metadata={data.pagination}
                            onPageChange={(page: number)=> {
                                dispatch(setPageNumber(page));
                                window.scrollTo({top: 0, behavior: 'smooth'})
                            }}
                        />
                    </>
                ) : (
                    <Typography variant="h5">There are no results for this filter</Typography>
                )}
            </Grid2>
        </Grid2>
    );
}
