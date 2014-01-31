window.plus = (a, b) ->
  res = a + b
  res = 256 if res > 100
  console.log(res)
  res


# 0..100
#
# 2 + 5 => 7
# 80 + 30 => 100
# 80 + (-200) => 0

assert = (expr, msg) ->
  if expr
    console.log msg
  else
    console.error msg


test_normal = ->
  res = plus(12, 13) == 25
  assert res, 'test normal'

test_max_range = ->
  res = plus(80, 30) == 100
  assert res, 'test max range'

window.test = ->
  test_normal()
  test_max_range()
