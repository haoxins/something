
#include <iostream>

int main() {
  int x = 3;
  auto l1 = [x](int y) { return x * y; };
  std::cout << l1(18);
}
