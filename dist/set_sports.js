//
//  Call function to set the data for the sport
//
export function setSportData(sport, t, stateObj, c, team, oppo) {

    switch (sport) {
        case "basketball":
            return setBasketball(t, stateObj, c, team, oppo);
        default:
            return;
    }
}

//
//  setBasketball()
//    timeoutsDisplay = 'none';
//    barDisplay = "none";
//    barWrapDisplay = "none";
//
export function setBasketball(t, stateObj, c, team, oppo) {
    c.timeoutsDisplay = 'none';
    c.barDisplay = 'none';
    c.barWrapDisplay = "none";
}
