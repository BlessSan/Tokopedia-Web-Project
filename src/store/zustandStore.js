import create from "zustand";
import { persist } from "zustand/middleware";

export const useMyPokemonStore = create(
  persist(
    (set, get) => ({
      pokemonsList: [],
      pokemonDetail: {},
      activeMenu: 0,
      addPokemon: (nickname) =>
        set((state) =>
          state.pokemonsList.push({
            index: state.pokemonsList.length,
            nickname: nickname,
            ...get().pokemonDetail,
          })
        ),
      removePokemon: (index) =>
        set(
          (state) =>
            (state.pokemonsList = state.pokemonsList.filter(
              (pokemon) => pokemon.index !== index
            ))
        ),
      getPokemonCount: (id) => {
        let count = 0;
        get().pokemonsList.forEach((pokemon) => pokemon.id === id && ++count);
        return count;
      },
      checkIfNicknameExist: (nickname) => {
        let result = false;
        get().pokemonsList.forEach((pokemon) => {
          if (pokemon.nickname === nickname) {
            result = true;
          }
        });
        return result;
      },
      resetList: () => set({ pokemonsList: [] }),
      setActiveMenu: (id) => set((state) => (state.activeMenu = id)),
      setPokemonDetail: (id, image, name) =>
        set(
          (state) =>
            (state.pokemonDetail = {
              id: id,
              image: image,
              name: name,
            })
        ),
    }),
    {
      name: "myPokemonList",
    }
  )
);

export const useIsActive = (id) => {
  const isActive = useMyPokemonStore((state) => state.activeMenu === id);
  return isActive;
};
