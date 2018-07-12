function Module(parameters) {
    this.width = parameters.width;
    this.height = parameters.height;
    this.heading = parameters.heading;
    this.successButton = parameters.successButton;
    this.elements = parameters.elements;
    this.open = function() {
        //Create background
        var background = document.createElement("div");
        background.style.backgroundColor = "black";
        background.style.position = "fixed";
        background.style.height = "100%";
        background.style.width = "100%";
        background.style.top = 0;
        background.style.left = 0;
        background.style.zIndex = 999;
        background.style.opacity = 0.9;
        background.id = "moduleBackground";
        //Create module
        var module = document.createElement("div");
        module.id = "moduleWindow";
        module.style.position = "absolute";
        module.style.width = this.width;
        module.style.height = this.height;
        module.classList.add("panel");
        module.classList.add("panel-default");
        module.style.zIndex = 1001;
        //Create module heading
        var moduleHeading = document.createElement("div");
        moduleHeading.style.position = "relative";
        moduleHeading.classList.add("panel-heading");
        var heading = document.createElement("div");
        heading.innerHTML = this.heading;
        var x = document.createElement("div");
        x.innerHTML = "X";
        x.style.right = "10px";
        x.style.top = "10px";
        x.style.position = "absolute";
        x.onclick = closeModule;
        x.style.cursor = "pointer";
        moduleHeading.append(heading);
        moduleHeading.append(x);
        module.append(moduleHeading);
        //Create module body
        var moduleBody = document.createElement("div");
        moduleBody.classList.add("panel-body");
        //Create success button
        var successButton = document.createElement("button");
        successButton.classList.add("btn");
        successButton.classList.add("btn-block");
        successButton.classList.add("btn-success");
        successButton.innerHTML = this.successButton;
        successButton.onclick = finishModule;
        //Add elements first
        moduleBody.append(moduleForm);
        moduleBody.append(successButton);
        module.append(moduleBody);
        background.append(module);
        body.append(background);
    }
    this.close = function() {
        var background = document.getElementById("moduleBackground");
        document.body.removeChild(background);
    }
    this.finish = function() {
        try {
            parameters.onClose();
        } catch(exception) {
        }
        this.close();
    }
    this.validate = function() {
        try {
            parameters.validate();
        } catch(exception){
        }
    }

}