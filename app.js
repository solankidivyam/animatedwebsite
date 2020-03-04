new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    navigation: true,
    onLeave: (origin,destination,direction)=> {
        const section = destination.item;
        console.log(section);
        TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=700');
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.3})
        tl.fromTo(title, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1})
        
    }
});