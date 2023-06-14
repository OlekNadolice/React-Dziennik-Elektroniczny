import useFilters from "hooks/useFilters";
import { renderHook, act } from "@testing-library/react";


const populatedData = {price:100, category:'books', amount:200}
const emptyData = {price:null, category:null, amount:null}


describe('Test useFilters', () => {
it('Should initalize data', () => {
    const filtersData = {...populatedData}
    const { result } = renderHook(() => useFilters(filtersData));
    expect(result.current.filters).toEqual(filtersData);
})


it('Should disable searching when every field is null', () => {
    const filtersData = {...emptyData};
    const {result} = renderHook(() => useFilters(filtersData));
    expect(result.current.shouldDisableFilterButton()).toBeTruthy();
})


it('Should enable searching when some of the fields are populated', () => {
    const filtersData = {...populatedData};
    const {result} = renderHook(() => useFilters(filtersData));
    expect(result.current.shouldDisableFilterButton()).toBeFalsy();
})


it('Should apply new filters', () => {
    const filtersData = {...populatedData};
    const {result } = renderHook(() => useFilters(filtersData))

    const newFilters = {price:200, category:'electronics', amount:300}
    act(() => {
        result.current.applyFilters(newFilters);
    })


    expect(result.current.filters).toEqual(newFilters);
})



it('Should set  all fields to null', () => {
    const filtersData = {...populatedData};
    const {result } = renderHook(() => useFilters(filtersData))

    act(() => {
        result.current.clearAllFilters();
    })


    expect(result.current.filters).toEqual(emptyData);

})



})