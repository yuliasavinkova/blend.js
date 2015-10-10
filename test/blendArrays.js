(function () {

  test('array blend', function (assert) {

    var obj1 = [1, 2, 3],
      obj2 = [4, 5, 6],
      result = blend(obj1, obj2),
      expected = [4, 5, 6];

    assert.deepEqual(result, expected, 'array blend');
  });

  test('array blend - deep', function (assert) {

    var obj1 = [1, 2, 3],
      obj2 = [4, 5, 6],
      result = blend(true, obj1, obj2),
      expected = [1, 2, 3, 4, 5, 6];

    assert.deepEqual(result, expected, 'array blend - deep');
  });

  test('array blend - null', function (assert) {

    var obj1 = [1, 2, 3],
      result = blend(obj1, null),
      expected = [1, 2, 3];

    assert.deepEqual(result, expected, 'array blend - null');
  });

  test('array blend - null2', function (assert) {

    var obj1 = [1, 2, 3],
      result = blend(null, obj1),
      expected = [1, 2, 3];

    assert.deepEqual(result, expected, 'array blend - null2');
  });

  test('array blend - undefined', function (assert) {

    var obj1 = [1, 2, 3],
      result = blend(obj1, undefined),
      expected = [1, 2, 3];

    assert.deepEqual(result, expected, 'array blend - undefined');
  });

  test('array blend - undefined2', function (assert) {

    var obj1 = [1, 2, 3],
      result = blend(undefined, obj1),
      expected = [1, 2, 3];

    assert.deepEqual(result, expected, 'array blend - undefined2');
  });
}());
