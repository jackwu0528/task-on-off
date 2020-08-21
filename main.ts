//% weight=0 color=#3CB371 icon="\uf0ad" block="Task"

from microbit import *
    
namespace task {
    //% blockId="TaskStart" block="start task"
    //% blockGap=0 weight=0
    export function TaskStart(): void {
        machine.enable_irq()
    }
    
    //% blockId="TaskStop" block="stop task"
    //% blockGap=0 weight=0
    export function TaskStop(): void {
        machine.disable_irq()
    }
}
