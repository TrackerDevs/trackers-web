import { defineStore } from 'pinia';

export const useTeamCardsStore = defineStore('teamCard', {
    state: () => {
        return {
            people: [
                {
                    name: "Person1",
                    position: "Admin",
                    bio: "Is a cool and smart person.",
                    image: "https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Fdefault-pfp.png?alt=media"
                },
                {
                    name: "Person2",
                    position: "Admin",
                    bio: "Is a cool and smart person.",
                    image: "https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Fdefault-pfp.png?alt=media"
                },
                {
                    name: "Person3",
                    position: "Admin",
                    bio: "Is a cool and smart person.",
                    image: "https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Fdefault-pfp.png?alt=media"
                },
                {
                    name: "Person4",
                    position: "Admin",
                    bio: "Is a cool and smart person.",
                    image: "https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Fdefault-pfp.png?alt=media"
                },
            ]
        };
    },
    getters: {
        getTeam(state) {
            return state.people;
        }
    },
    actions: {

    }
})