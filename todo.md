TODOS
-----

## Client

- Style main team list view
    - Teams should probably be alphabetical, separated by conference
    - Possibly show W/L ratio (would require having to fetch all existing games
    on prepopulate)
- Create component for expanded view that shows only a single team's info with a
game list
    - Show win-loss
    - Game list should be another list of cards in reverse-order by date
        - Each card should hide spoilers by default
        - Add (View spoilers) button that will expand the card and reveal score,
        highlight winner and embedded highlights vid

## Server

- Smarter caching for highlight URLs (maybe refetch once in a while).

