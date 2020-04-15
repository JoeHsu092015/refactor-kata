# refactor-kata

## 練習 legacy code refactor 技巧


替 POSDisplayer class 寫測試, 確保之後的重構正確性

利用下面的方法來寫測試:

1. **hidden method transform**
   * 嘗試更改 private method 的宣告型態, 使其容易被測試
2. **extract method**
   * 嘗試用 extract method 拆解 process(), 找出適合的測試項目
3. **adapt parameter method**
   * 用 adapt parameter 嘗試把 ServletRequest 包成新的 interface
4. **command/Query pattern**
   * 在extract method 時候嘗試用 command/Query pattern

