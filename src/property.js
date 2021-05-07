class Property{
    static allProperties = []

    constructor({id, name}){
        this.id = id
        this.name = name
        Property.allProperties.push(this)
    }

    static fetchProperties(){
        fetch('http://localhost:3000/properties')
            .then(resp => resp.json())
            .then(properties => { 
                properties.forEach(p => {
                    if (!Property.allProperties.includes(p)){
                        new Property(p)
                    }
                })
                this.appendCheckboxes()
            })
    }

    // don't think i need this anymore
    // appendPropertyToProfile(par){
    //     par.innerHTML += `${this.name}, `
    // }


    // how to use the method from the herb class instead of rewriting??
    static appendCheckboxes(){
        const checkbox = document.getElementsByClassName('checkbox')[0]
        const cb = document.querySelectorAll('.cb')
        this.allProperties.forEach(p => {
            const cb = document.createElement('input')
            const label = document.createElement('label')
            label.innerText = p.name
            label.id = p.id
            // want to add event listener to take us to property show page:
            // label.addEventListener('click', e => this.fetchProperty(e))
            cb.setAttribute('type', 'checkbox')
            cb.id = p.id
            cb.className = 'cb'
            checkbox.appendChild(cb)
            checkbox.appendChild(label)
            // !this.allProperties.includes(p.id) ? this.allProperties.push(p.id) : p
        })
    }

    
        

        // want to add event listener to take us to property show page
        // fetchProperty(e){
        //     debugger
        // }
        
    // }

    // static newHerbForm(){
    //     const checkbox = document.getElementsByClassName('checkbox')[0]
    //     // const checkboxProperties = []
    //     const cb = document.querySelectorAll('.cb')
    //     this.appendCheckboxes(checkbox)
    //     // cb.forEach(cb => !checkboxProperties.includes(parseInt(cb.id)) ? checkboxProperties.push(parseInt(cb.id)) : cb)
    // }

}