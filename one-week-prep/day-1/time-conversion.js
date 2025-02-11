function timeConversion(s) {
    let timeOfDay = s[8] + s[9];
    let hour = Number(s[0] + s[1]);

    switch (timeOfDay) {
        case "PM":
            if(hour === 12){
                return s.slice(0,8);
            } else {
                return (hour + 12) + s.slice(2,8); 
            }
        
        case "AM":
            if(hour === 12){
                return "00" + s.slice(2,8);
            } else {
                return s.slice(0,8);
            }
    
        default:
            return "error";
    }

}

console.log(timeConversion("07:05:45PM"));

console.log(timeConversion("12:05:45PM"));

