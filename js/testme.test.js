describe('Объект JsUsefulClass', function() {
  var useful, useful2;

  it('не должен иметь уровней при создании', function() {
    useful = new JsUsefulClass();
    expect(Object.keys(useful.instances).length).toBe(0);
  });

  it('должен добавлять новый уровень при добавлении номера', function() {
    useful.add_number(1, 1);
    expect(Object.keys(useful.instances).length).toBe(1);
  });

  it('должен использовать существующий уровень при добавлении номера', function() {
    useful.add_number(2, 1);
    expect(Object.keys(useful.instances).length).toBe(1);
  });

  it('должен возвращать соответствующий уровень при добавлении номера', function() {
    var levelKey = 1, level;
    level = useful.add_number(3, levelKey);
    expect(level).toEqual(useful.instances[levelKey]);
  });

  it('должен возвращать остаток от деления номера параметра на уровень для всех параметров всех уровней', function() {
    useful.add_number(1, 2);
    useful.add_number(2, 2);
    useful.add_number(3, 2);
    expect(useful.getAllLevels()).toEqual({ 1: [ 0, 0, 0 ], 2: [ 0, 1, 0 ] });
  });

  it('должен возвращать результат функции, примененной для всех параметров всех уровней', function() {
    expect(useful.getAllLevels(function (num, level) {
      return num * level;
    })).toEqual({ 1: [ 0, 1, 2 ], 2: [ 0, 2, 4 ] });
  });

  it('2 не должен иметь уровней при создании', function() {
    useful2 = new JsUsefulClass();
    expect(Object.keys(useful2.instances).length).toBe(0);
  });

  it('2 должен добавлять новый уровень при добавлении номера', function() {
    useful2.add_number(1, 1);
    expect(Object.keys(useful2.instances).length).toBe(1);
  });

  it('2 должен использовать существующий уровень при добавлении номера', function() {
    useful2.add_number(2, 1);
    expect(Object.keys(useful2.instances).length).toBe(1);
  });

  it('2 должен возвращать соответствующий уровень при добавлении номера', function() {
    var levelKey = 1, level;
    level = useful2.add_number(3, levelKey);
    expect(level).toEqual(useful2.instances[levelKey]);
  });

  it('2 должен возвращать остаток от деления номера параметра на уровень для всех параметров всех уровней', function() {
    useful2.add_number(1, 2);
    useful2.add_number(2, 2);
    useful2.add_number(3, 2);
    expect(useful2.getAllLevels()).toEqual({ 1: [ 0, 0, 0 ], 2: [ 0, 1, 0 ] });
  });

  it('2 должен возвращать результат функции, примененной для всех параметров всех уровней', function() {
    expect(useful2.getAllLevels(function (num, level) {
      return num * level;
    })).toEqual({ 1: [ 0, 1, 2 ], 2: [ 0, 2, 4 ] });
  });
});
