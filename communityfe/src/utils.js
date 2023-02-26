export const login = (credential) => {
    const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;
  
    return fetch(loginUrl, { //发出指令//from window, global function
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include", //accept cookies which save session id / token //need to tell browser.
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) { //callback
        throw Error("Fail to log in");
      }
    });
  };
  
  export const signup = (data) => {
    const signupUrl = "/signup";
  
    return fetch(signupUrl, {
      method: "POST",
      headers: { //request header
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => { //fetch return an object, when have a .then function
      if (response.status < 200 || response.status >= 300) { //whne there is a response
        throw Error("Fail to sign up");
      }
    });

    //can not be const resp = fetch()
    //console.log(resp); -> not sure if there will be a response
  };
  

  export const createPost = (data) => {
    const signupUrl = "/announcements/create";
  
    return fetch(signupUrl, {
      method: "POST",
      headers: { //request header
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => { 
      if (response.status < 200 || response.status >= 300) { 
        throw Error("Fail to make a post");
      }
    });

  };

  




  // export const getUser = () => {
  //   return fetch("/home").then((response) => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw Error("Fail to get user");
  //     }
  
  //     return response.json();
  //   });
  // };

  export const getUser = () => {
    return fetch("/home").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get user");
      }
  
      return response.json();
    });
  };



  

  // need to modify based on backend API
  // export const getMenus = (restId) => {
  //   return fetch(`/restaurant/${restId}/menu`).then((response) => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw Error("Fail to get menus");
  //     }
  
  //     return response.json();
  //   });
  // };
  
  export const getAnnouncements = () => {
    return fetch("/announcements").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get announcements");
      }
  
      return response.json();
    });
  };

  export const getDiscussions = () => {
    return fetch("/discussion").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get discussions");
      }
  
      return response.json();
    });
  };
  
  // export const getCart = () => {
  //   return fetch("/cart").then((response) => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw Error("Fail to get shopping cart data");
  //     }
  
  //     return response.json();
  //   });
  // };
  
  // export const checkout = () => {
  //   return fetch("/checkout").then((response) => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw Error("Fail to checkout");
  //     }
  //   });
  // };
  
  // export const addItemToCart = (itemId) => {
  //   return fetch(`/order/${itemId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   }).then((response) => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw Error("Fail to add menu item to shopping cart");
  //     }
  //   });
  // };

  export const deleteAnnoucement = (aId) => {

    return fetch(`/announcements/${aId}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to delete annoucement");
      }
    });
  };

    
  export const reply = (data, pid) => {
    const signupUrl = `/discussion/${pid}/createComment`;
  
    return fetch(signupUrl, {
      method: "POST",
      headers: { //request header
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => { 
      if (response.status < 200 || response.status >= 300) { 
        throw Error("Fail to make a post");
      }
    });

  };

  export const getComments = (pid) => {
    return fetch(`discussion/${pid}/comment`).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get comments");
      }
  
      return response.json();
    });
  };

  export const getAmenities = () => {
    const getAmenitiesUrl = "/amenity";
  
    return fetch(getAmenitiesUrl).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get amenities");
      }

      return response.json();
    });
  };

  export const getReservations = () => {
    const getReservationsUrl = "/myreservations";
  
    return fetch(getReservationsUrl).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get amenities");
      }

      return response.json();
    });
  };

  export const checkAvailability = (rid, dateString, timeslot) => {
    return fetch(`reserve?amenity_id=${rid}&date=${dateString}&timeslot=${timeslot}`)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw Error("Fail to get comments");
      }
  
      return response.json();
    });
  };

  export const makeReservation = (rid, dateString, timeslot) => {
    return fetch(`reserve?amenity_id=${rid}&date=${dateString}&timeslot=${timeslot}`)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw Error("Fail to get comments");
      }
  
      return response.json();
    });
  };