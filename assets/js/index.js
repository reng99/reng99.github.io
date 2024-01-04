(function(){
  window.onload = function() {
    const headerTriangleDom = document.querySelectorAll('#header-part .has-triangle');
    const headerTriangleSiblingContent =  document.querySelectorAll('#header-part .has-triangle + div.other-content')
    let currentTriangleIndex = -1;

    for(let i = 0; i < headerTriangleDom.length; i += 1) {
      let item = headerTriangleDom[i];
      item.addEventListener('click', function(event) {
        removeHeaderSiblingTriangleClickStyle(i, 'sibling');
        
        if(headerTriangleSiblingContent[i].classList.contains('other-content-click')) {
          headerTriangleSiblingContent[i].classList.remove('other-content-click')
          currentTriangleIndex = -1;
        } else {
          headerTriangleSiblingContent[i].classList.add('other-content-click');
          currentTriangleIndex = i;
        }
        event.stopPropagation();
      })
    }

    function removeHeaderSiblingTriangleClickStyle(index, flag) {
      for(let i = 0; i < headerTriangleDom.length; i += 1) {
        if(headerTriangleSiblingContent[i].classList.contains('other-content-click')) {
          if(flag === 'sibling' && index !== i) {
            headerTriangleSiblingContent[i].classList.remove('other-content-click')
          }
          if(flag === 'all') {
            headerTriangleSiblingContent[i].classList.remove('other-content-click')
          }
        }
      }
    }

    document.addEventListener('click', function(event) {
      let eventTarget = event.target;
      if(currentTriangleIndex >= 0 && eventTarget !== headerTriangleSiblingContent[currentTriangleIndex] && !headerTriangleSiblingContent[currentTriangleIndex].contains(eventTarget)) {
        removeHeaderSiblingTriangleClickStyle(-1, 'all');
      }
      // event.preventDefault();
    })
  }


  function Parent(name) {
    this.name = name;
  }
  Parent.prototype.sayName = function() {
    console.log(this.name)
  }

  function Child(name, age) {
    Parent.call(this, name);
    this.age = age
  }
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
  // 在子 prototype 之后添加
  Child.prototype.sayName = function() {
    console.log(this.name, 'come here')
  }
  

  let child = new Child('Jimmy', 18);
  child.sayName();


  function playVideo() {
    let video = document.getElementById("video");
    let promise = undefined;
    if(video) {
      promise = video.play();
    }
    if(promise !== undefined) {
      promise.then(() => {

      }).catch(() => {
        console.log(error, 'error video')
      })
    }
  }
  playVideo();
  
})()