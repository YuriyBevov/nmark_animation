import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

const animationBlock = document.querySelector('.animation-block');

if(animationBlock) {
  console.log('Exist');

  const tree = document.querySelector('.lw-tree');
  const backTree = document.querySelector('.lw-back-tree');
  const frontTree = document.querySelector('.lw-front-tree');
  const fence = document.querySelector('.lw-fence');
  const house = document.querySelector('.lw-house');

  const houseRoof = house.querySelector('svg rect:nth-child(1)');
  const houseFoundation = house.querySelector('svg rect:nth-child(3)');
  const houseWalls = house.querySelector('svg rect:nth-child(2)');

  console.log(houseRoof, houseFoundation, houseWalls);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: animationBlock,
      start: "top center",
      /*end: "center bottom",*/
      /*end: "+=1000",*/
      /*scrub: true,*/
      /*markers: true,*/
    }
  })

  .fromTo(houseFoundation, {
    opacity: 0,
    y: 150
  },{
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'ease-in'
  })

  .fromTo(houseWalls, {
    opacity: 0,
    y: '100%'
  },{
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'back'
  }, "-=.7")

  .fromTo(houseRoof, {
    opacity: 0,
    y: '-30px'
  },{
    opacity: 1,
    y: 0,
    duration: .8,
    ease: 'back'
  }, "-=.3")

  .fromTo(tree, {
      opacity: 0,
      y: 200,
      scale: 0
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.6,
      ease: 'elastic'
    }, "-=.7")

  .fromTo(backTree, {
      opacity: 0,
      y: 200,
      scale: 0
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.8,
      ease: 'elastic'
    }, "-=1.2")

  .fromTo(frontTree, {
      opacity: 0,
      y: 200,
      scale: 0
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: 'elastic'
    }, "-=1.6")

  .fromTo(fence, {
      opacity: 0,
      y: '200',
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: .4,
      ease: 'back'
    },  "-=1.5")
}

/*
.fromTo(houseFoundation, {
    opacity: 0,
    y: 150
  },{
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'ease-in'
  })

  .fromTo(houseWalls, {
    opacity: 0,
    y: '100%'
  },{
    opacity: 1,
    y: 0,
    duration: .8,
    ease: 'back'
  }, "-=.5")

  .fromTo(houseRoof, {
    opacity: 0,
    y: '-30px'
  },{
    opacity: 1,
    y: 0,
    duration: .8,
    ease: 'back'
  }, "-=.5")

  .fromTo(tree, {
      opacity: 0,
      y: 200,
      scale: 0
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'elastic'
    }, "-=.7")

  .fromTo(backTree, {
      opacity: 0,
      y: 200,
      scale: 0
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.6,
      ease: 'elastic'
    }, "-=1.2")

  .fromTo(frontTree, {
      opacity: 0,
      y: 200,
      scale: 0
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: 'elastic'
    }, "-=1.2")

  .fromTo(fence, {
      opacity: 0,
      y: '200',
    },{
      opacity: 1,
      y: 0,
      scale: 1,
      duration: .4,
      ease: 'back'
    },  "-=1.2")
*/
