import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [''],
    //ids: string[],
    //ids: Array<string>,
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {}
});

const FavoritesContextProvider = ({children}: any) => {

    const [favoriteMealIds, setfavoriteMealIds] = useState<string[]>([]); //takes an array of ids which are strings

    const addFavorite = (id: string) => {
        setfavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    const removeFavorite = (id: string) => {
        setfavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return(
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;