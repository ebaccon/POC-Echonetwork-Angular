import {signalStore, withState, withMethods, patchState, withHooks} from '@ngrx/signals';

export const localStorageKeyDarkMode = 'dark-mode';

export const DarkModeStore = signalStore(
    { providedIn: 'root' },
    withState({ darkMode: false }),
    withMethods((store) => ({
        toggleDarkMode: () => {
            const isDarkMode = !store.darkMode();
            patchState(store, { darkMode: isDarkMode });
            localStorage.setItem(localStorageKeyDarkMode, String(isDarkMode));
        }
    })),
    withHooks({
        onInit: (store) => {
            patchState(store, { darkMode: localStorage.getItem(localStorageKeyDarkMode) === 'true' });
        }
    })

);

