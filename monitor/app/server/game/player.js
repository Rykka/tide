"use strict";

class Random {
    R2() {
        // 0~1
        return  Math.floor(Math.random() * 2)
    }
    R3() {
        // 0~2
        return  Math.floor(Math.random() * 3)
    }
    R4() {
        // 0~2
        return  Math.floor(Math.random() * 4)
    }
    R5() {
        // 0~7
        return  Math.floor(Math.random() * 5)
    }
    R6() {
        return  Math.floor(Math.random() * 6)
    }
    R8() {
        return  Math.floor(Math.random() * 8)
    }
    R12() {
        return  Math.floor(Math.random() * 12)
    }
    R28() {
        return  Math.floor(Math.random() * 28)
    }
}
var RND = new Random()
    
// Race
// Prof

// Buff:
// time
// effect

// Dmg:
// Cric
// Miss
// Armor

// Stragedy:
// Aggressive
// Defensive

class Player {
    constructor(s){
        this.socket = s
        this.name = s.name || 'player'
        this.hp = 30
        this.mp = 1
        this.has_heal = 3

        this.turn_ended = true
        this.game
        this.socket.on('use method', function(m){
            console.log('TURN:' + this.turn_ended)
            if (!this.turn_ended) {
                if (m=='atk') {
                    this.log(this.name + ' choose attack')
                    this.attack(this.game.enemy(this))
                } else {
                    this.log(this.name + ' choose skill')
                    this.skill(this.game.enemy(this))
                }
                this.turn_ended = true
                this.game.endTurn(this)
            } else {
                this.socket.emit('log', 'NOT YOUR TURN')
                // console.log(this.name + ' NOT YOUR TURN NOW')
            }
        }.bind(this))
    }
    log(msg){
        console.log(msg)
        this.game.room.emit('log', msg)
    }
    startGame(game) {
        if (this.socket.is_in_game) {
            console.log('IS ALREADY IN A GAME')
        } else {
            this.game = game
            this.socket.is_in_game = true
        }
    }
    endGame() {
        if (this.socket.is_in_game) {
            this.game = null
            this.socket.is_in_game = false
        } else {
            console.log('ALREADY Quit GAME')
        }
    }
    attack(target){
        let atk = RND.R4() + 2
        this.log(this.name + ' does ' + atk +' DMG to ' + target.name )
        target.hp-=atk
    }
    skill(target){
        if (RND.R28() == 0) {
            this.log(this.name + ' restore ' + 10  + ' mp')
            this.mp+=10
        }
        
        if (this.has_heal && ((RND.R4() && this.hp <= 20) || (RND.R2() && this.hp <= 10 ) || (this.hp <= 5 && target.hp>=6) )) {
            if ( this.mp >= 6) {
                this.has_heal-- 
                let heal = RND.R8() + 8
                this.hp += heal
                this.log(this.name + ' use ' + 5  + ' mp , does ' + heal +' heal to' + this.hp)
                if (this.hp > 30) {
                    this.hp = 30
                }
                this.mp -= 6
            }
        } else {
            if ( this.mp >= 12) {
                let atk = RND.R12() + 15 
                this.log(this.name + ' use ' + 10  + ' mp , does ' + atk +' AA DMG to ' + target.name )
                target.hp -= atk
                this.mp -= 10
            } else if ( this.mp >= 8 ) {
                let atk = RND.R12() + 5
                this.log(this.name + ' use ' + 5  + ' mp , does ' + atk +' LIGHTING DMG to ' + target.name )
                target.hp -= atk
                this.mp -= 8
            } else if (this.mp >= 5 ){
                let atk = RND.R5() + 4
                this.log(this.name + ' use ' + 5  + ' mp , does ' + atk +' LIGHTING DMG to ' + target.name )
                target.hp -= atk
                this.mp -= 5
            } else {
                this.log('Not enough Mana')
            }
        }

    }
    startTurn() {
        this.turn_ended = false
        console.log('TURN:' + this.turn_ended)
        this.socket.emit('choose method')
        // if (this.mp >= 5 ) {
        // } else {
        //     this.log('Attack Auto')
        //     this.attack(this.game.enemy(this))
        //     this.turn_ended = true
        //     this.game.endTurn(this)
        // }

        setTimeout(() =>{
            if (!this.turn_ended) {
                this.log('Attack Auto')
                this.attack(this.game.enemy(this))
                this.turn_ended = true
                this.game.endTurn(this)
            }
        }, 5000);
    }
}

module.exports = Player
