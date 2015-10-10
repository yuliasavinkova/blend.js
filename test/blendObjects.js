(function () {

  test('object blend', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      obj2 = {4: 4, 5: 5, 6: 6},
      result = blend(obj1, obj2),
      expected = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6};

    assert.deepEqual(result, expected, 'object blend');
  });

  test('object blend - deep', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      obj2 = {4: 4, 5: 5, 6: 6, 2: 0, 3: 3},
      result = blend(true, obj1, obj2),
      expected = {1: 1, 2: 0, 3: 3, 4: 4, 5: 5, 6: 6};

    assert.deepEqual(result, expected, 'object blend - deep');
  });

  test('object blend - deep with dedup', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      obj2 = {4: 4, 5: 5, 6: 6, 2: 0, 3: 3},
      result = blend(true, true, obj1, obj2),
      expected = {1: 1, 2: 0, 3: 3, 4: 4, 5: 5, 6: 6};

    assert.deepEqual(result, expected, 'object blend - deep');
  });

  test('object blend - null', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      result = blend(obj1, null),
      expected = {1: 1, 2: 2, 3: 3};

    assert.deepEqual(result, expected, 'object blend - null');
  });

  test('object blend - null2', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      result = blend(null, obj1),
      expected = {1: 1, 2: 2, 3: 3};

    assert.deepEqual(result, expected, 'object blend - null2');
  });

  test('object blend - undefined', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      result = blend(obj1, undefined),
      expected = {1: 1, 2: 2, 3: 3};

    assert.deepEqual(result, expected, 'object blend - undefined');
  });

  test('object blend - undefined2', function (assert) {

    var obj1 = {1: 1, 2: 2, 3: 3},
      result = blend(undefined, obj1),
      expected = {1: 1, 2: 2, 3: 3};

    assert.deepEqual(result, expected, 'object blend - undefined2');
  });
}());
