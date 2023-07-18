import angular from 'angular';
import React from 'react';

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import react2angularjs from 'react2angularjs';

angular
  .module('myApp', [])
  .directive(
    'reactTooltip',
    react2angularjs(Tooltip, ['trigger', 'placement', 'overlay'])
  )
  .controller('myController', function() {
    var vm = this;

    vm.name = 'AngularJS application';

    vm.tooltip = (
      <i>
        <b>Fancy react tooltip</b>
      </i>
    );

    vm.helloWorld = 'Hello World!';
    vm.buttonClickCount = 0;

    vm.increaseCount = _increaseCount;

    function _increaseCount() {
      ++vm.buttonClickCount;
    }
  });
