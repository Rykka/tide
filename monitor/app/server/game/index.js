"use strict";
class Game {
    constructor(p1, p2, i, room){
        this.id = i
        this.room = room
        this.p1 = p1
        this.p2 = p2
        this.players= [this.p1, this.p2]
        this.round_num = 1
        this.p2.mp=3
    }
    enemy(p){
        if (p==this.p1) {
            return this.p2
        } else {
            return this.p1
        }
    }
    endTurn(p){
        this.nextRound()
    }
    nextRound(){
        this.round_num++
        this.round()
    }
    log(msg) {
        console.log(msg)
        this.room.emit('log', msg)
    }
    round(){
        let p1 = this.p1
        let p2 = this.p2
        if (p1.hp<=0 || p2.hp<=0) {
            this.end()
        } else {
        this.log("===== ROUND " + this.round_num + " =====")
        p1.mp++
        p2.mp++
        this.log(p1.name + ' HP ' + p1.hp + ' MP ' + p1.mp + ' : ' + p2.name + ' HP ' + p2.hp +' MP ' + p2.mp)
       var game_status =  {
           p1:{name:p1.name, mp:p1.mp,hp:p1.hp, id:p1.socket.id}, 
            p2:{name:p2.name, mp:p2.mp,hp:p2.hp, id:p2.socket.id},
       }
            if (this.round_num % 2 ) {
                this.log("ROUND for" + p1.name)
                p1.startTurn()
                game_status.p1.turn = true
                game_status.p2.turn = false
                
            } else {
                this.log("ROUND for" + p2.name)
                p2.startTurn()
                game_status.p1.turn = false
                game_status.p2.turn = true
            }
            this.room.emit('game status', game_status) 
        }
    }
    round_fin(){
        this.round()
    }
    start(){
        this.p1.startGame(this)
        this.p2.startGame(this)
        this.round()
    }
    end(){
        let p1 = this.p1
        let p2 = this.p2
        this.log("===== ID " + this.id + " GAME END " + this.round_num + " TURN =====")
        this.room.emit('game status', {
            p1:{name:p1.name, mp:p1.mp,hp:p1.hp}, 
            p2:{name:p2.name, mp:p2.mp,hp:p2.hp}
        }) 
        if (p1.hp > p2.hp) {
            this.log(p1.name + ' WON')
        } else {
            this.log(p2.name + ' WON')
        }
        p1.endGame()
        p2.endGame()
    }
}

module.exports = Game
