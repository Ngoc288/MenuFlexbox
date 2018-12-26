var config = {
        container: "#OrganiseChart1",
        rootOrientation:  'NORTH', // NORTH || EAST || WEST || SOUTH
        // levelSeparation: 30,
        siblingSeparation:   20,
        subTeeSeparation:    60,
        scrollbar: "fancy",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    ceo = {
        text: {
            name: "Mark Hill",
            title: "07/08/2018",
        },
        image: "../../img/headshots/2.jpg",
        HTMLid: "ceo"
    },

    cto = {
        parent: ceo,
        text:{
            name: "Joe Linux",
            title: "07/08/2018",
        },
        // stackChildren: true,
        image: "../../img/headshots/1.jpg",
        HTMLid: "coo"
    },
    cbo = {
        parent: ceo,
        text:{
            name: "Linda May",
            title: "07/08/2018",
        },
        image: "../../img/headshots/5.jpg",
        HTMLid: "cbo"
    },
    cdo = {
        parent: ceo,
        text:{
            name: "John Green",
            title: "07/08/2018",
        },
        image: "../../img/headshots/6.jpg",
        HTMLid: "cdo"
    },
    cio = {
        parent: cto,
        text:{
            name: "Ron Blomquist",
            title: "07/08/2018",
        },
        image: "../../img/headshots/8.jpg",
        HTMLid: "cio"
    },
    ciso = {
        parent: cto,
        text:{
            name: "Michael Rubin",
            title: "07/08/2018",
        },
        image: "../../img/headshots/9.jpg",
        HTMLid: "ciso"
    },
    cio2 = {
        parent: cdo,
        text:{
            name: "Erica Reel",
            title: "07/08/2018",
        },
        link: {
            href: "http://www.google.com",
            target: "_blank"
        },
        image: "../../img/headshots/10.jpg",
        HTMLid: "cio2"
    },
    ciso2 = {
        parent: cbo,
        text:{
            name: "Alice Lopez",
            title: "07/08/2018",
        },
        image: "../../img/headshots/7.jpg",
        HTMLid: "ciso2"
    },
    ciso3 = {
        parent: cbo,
        text:{
            name: "Mary Johnson",
            title: "07/08/2018",
        },
        image: "../../img/headshots/4.jpg",
        HTMLid: "ciso2"
    },
    ciso4 = {
        parent: cbo,
        text:{
            name: "Kirk Douglas",
            title: "07/08/2018",
        },
        image: "../../img/headshots/11.jpg",
        HTMLid: "ciso2"
    }
    ciso5 = {
        parent: ciso4,
        text:{
            name: "Kirk Douglas Child",
            title: "07/08/2018",
        },
        image: "../../img/headshots/11.jpg",
        HTMLid: "ciso2"
    }

    ALTERNATIVE = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        cio2,
        ciso2,
        ciso3,
        ciso4,
        ciso5
    ];