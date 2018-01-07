define(["require", "exports", "jquery", "./modules/digital/Digital", "../../res/Clock/ClockEvent", "../../res/Clock/Clock"], function (require, exports, $, Digital_1, ClockEvent_1, Clock_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Zero = /** @class */ (function () {
        function Zero() {
            console.log("Zero v0");
            this.clock = new Clock_1.Clock()
                .listener(ClockEvent_1.ClockEvent.SEC, function (e) {
            })
                .onceListener(ClockEvent_1.ClockEvent.SEC, function (e) {
            });
            this.digital = new Digital_1.Digital(this.clock);
            $("body").append(this.digital.$obj);
        }
        return Zero;
    }());
    new Zero();
});
//# sourceMappingURL=Zero.js.map