LswLifecycle.hooks.register("app:install_modules", "install_module:org.allnulled.lsw.db", function() {
  console.log("[*] Installing db");
  return LswUtils.waitForMilliseconds(1);
});