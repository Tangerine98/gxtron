// $(document).ready(function(){
//     $(".iris").click(function(){
//         $("html").addClass("is-clipped");
//         $("#iris-modal").addClass("is-active");
//     });
//     $(".rfid").click(function(){
//         $("html").addClass("is-clipped");
//         $("#rfid-modal").addClass("is-active");
//     });
//     $(".data-log").click(function(){
//         $("html").addClass("is-clipped");
//         $("#datalog-modal").addClass("is-active");
//     });
//     $(".home-auto").click(function(){
//         $("html").addClass("is-clipped");
//         $("#homeauto-modal").addClass("is-active");
//     });
//     $(".modal-close").click(function() {
//         $("html").removeClass("is-clipped");
//         $(".modal").removeClass("is-active");
//     });
//     $(".modal-background").click(function() {
//         $("html").removeClass("is-clipped");
//         $(".modal").removeClass("is-active");
//     });
// });

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector),0);
  }

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  console.log($modalButtons);
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  console.log($modalCloses);

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        console.log(target);
        openModal(target);
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
  }

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });
});