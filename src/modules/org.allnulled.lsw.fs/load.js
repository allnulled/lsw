LswLifecycle.hooks.register("app:install_modules", "install_module:org.allnulled.lsw.fs", function() {
  console.log("[*] Installing fs");
  return LswUtils.waitForMilliseconds(1);
});