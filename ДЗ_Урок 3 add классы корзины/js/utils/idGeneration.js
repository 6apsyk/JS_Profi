let lastID = 0;

export default () => {
    // lastID++
    if (lastID == 6){
        return lastID = 0;
    }else {
        return ++lastID
    }
};