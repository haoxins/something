
#include <iostream>

template<typename T>
void fun1(T param) {
  std::cout << param;
  std::cout << "\n";
}

int main() {
  fun1(89);
  fun1("89");

  const char name[] = "Hello, world!";
  fun1(name);

  auto x = 88;
  const auto y = 89;
  fun1(x);
  fun1(y);
}
