"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.default.listen(app_1.default.get("port"), () => {
    console.log("App is running on http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
});
exports.default = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUF3QjtBQUV4QixNQUFNLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDLGFBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQ1Asa0RBQWtELEVBQ2xELGFBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQ2YsYUFBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDakIsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsTUFBTSxDQUFDIn0=