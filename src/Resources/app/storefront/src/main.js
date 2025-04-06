import ProductDetailAccordeonPlugin from './product-detail-accordeon-plugin/product-detail-accordeon-plugin.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('ProductDetailAccordeonPlugin', ProductDetailAccordeonPlugin, '#product-detail-tabs');