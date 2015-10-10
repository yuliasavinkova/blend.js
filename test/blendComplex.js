(function () {

  test('3 objects blend', function (assert) {

    var target = {
        test: 'me'
      },
      obj1 = {
        hello: {
          name: 'world',
          ids: [1, 2, 3, 4]
        }
      },
      obj2 = {
        hello: {
          first: 'kieran',
          ids: [4, 5, 6, 7]
        }
      },
      result = blend(target, obj1, obj2),
      expected = new Object({
        test: 'me',
        hello: {
          first: 'kieran',
          ids: [4, 5, 6, 7]
        }
      });

    assert.deepEqual(result, expected, '3 objects blend');
  });

  test('3 objects blend - deep', function (assert) {

    var target = {
        test: 'me'
      },
      obj1 = {
        hello: {
          name: 'world',
          ids: [1, 2, 3, 4]
        }
      },
      obj2 = {
        hello: {
          first: 'kieran',
          ids: [4, 5, 6, 7]
        }
      },
      result = blend(true, target, obj1, obj2),
      expected = new Object({
        test: 'me',
        hello: {
          first: 'kieran',
          name: 'world',
          ids: [1, 2, 3, 4, 4, 5, 6, 7]
        }
      });

    assert.deepEqual(result, expected, '3 objects blend - deep');
  });

  test('3 objects blend - deep with dedup', function (assert) {

    var target = {
        test: 'me'
      },
      obj1 = {
        hello: {
          name: 'world',
          ids: [1, 2, 3, 4]
        }
      },
      obj2 = {
        hello: {
          first: 'kieran',
          ids: [4, 5, 6, 7]
        }
      },
      result = blend(true, true, target, obj1, obj2),
      expected = new Object({
        test: 'me',
        hello: {
          first: 'kieran',
          name: 'world',
          ids: [1, 2, 3, 4, 5, 6, 7]
        }
      });

    assert.deepEqual(result, expected, '3 objects blend - deep');
  });

}());
