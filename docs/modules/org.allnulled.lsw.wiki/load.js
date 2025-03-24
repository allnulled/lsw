LswLifecycle.hooks.register("app:install_modules", "install_module:org.allnulled.lsw.wiki", function() {
  console.log("[*] Installing wiki");
  return LswUtils.waitForMilliseconds(1);
});