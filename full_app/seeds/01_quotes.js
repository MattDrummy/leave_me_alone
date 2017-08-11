
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "quotes"; ALTER SEQUENCE quotes_id_seq RESTART WITH 22;')
    .then(function () {
      // Inserts seed entries
      var quotes = [{
        id: 1,
        quote: "Could you tell me the next time that you’re choking? ‘Cause I’ll rush right over to shove some dirt right down your throat."
      },{
        id: 2,
        quote: "I’d walk through hell for you. Let it burn right through my shoes. These soles are useless without you…and yes, I’m sure you were really into this song when it was a demo track."
      },{
        id: 3,
        quote: "The truth, is you could slit my throat. And with my one last gasping breath I’d apologize for bleeding on your shirt."
      },{
        id: 4,
        quote: "This is the first song for your mixtape. It’s short just like your temper, but somewhat golden like the afternoons we used to spend before you got too cool."
      },{
        id: 5,
        quote: "Breathe in deep, let it out slow. Did you hear it’s all my fault again? I know why no one else knows why I am all alone again"
      },{
        id: 6,
        quote: "Now I’m staring at my wrist, hoping that the timing is right. When the planets will align. There will be no planets to align. Just the carcass of the sun and those little painted marbles spinning senseless through an endless black sky."
      },{
        id: 7,
        quote: "Staring at the setting sun, no reason to come back again, the twilight world in blue and white, the needle and the damage done. I don’t want to feel this way forever. A dead letter marked return to sender."
      },{
        id: 8,
        quote: "I’ll eat your heart out, so you feel my pain."
      },{
        id: 9,
        quote: "Last night everything was right and the rain was gone. One summer night’s the only time we’ve known. Shut your eyes and when you wake i’ll be gone."
      },{
        id: 10,
        quote: "Last night I had a dream that we went to Disneyland, went on all the rides, didn’t have to wait in line. I drove you to your house where we stared up at the stars, I listened to your heartbeat as I held you in my arms."
      },{
        id: 11,
        quote: "Buried deep as you can dig inside yourself, and hidden in the public eye, such a stellar monument to loneliness. Laced with brilliant smiles and shining eyes, perfect make-up, but you’re barely scraping by, but you’re barely scraping by…"
      },{
        id: 12,
        quote: "We’re still bleeding from these back stabbed scars, young boys dying in an old man’s war, and your sympathy can’t take that away."
      },{
        id: 13,
        quote: "Stop burning bridges and drive off of them. So I can forget about you. So bury me in memory, his smile’s your rope. So wrap it tight around your throat."
      },{
        id: 14,
        quote: "Considering everything, me leaving with regrets only makes sense. I’ll see you when we’re both not so emotional."
      },{
        id: 15,
        quote: "You’re as welcome as cancer, but my door is always unlocked."
      },{
        id: 16,
        quote: "I had the feeling that those looks you gave me were real what if I ripped your heart apart at the seams maybe then you’d know how I feel."
      },{
        id: 17,
        quote: "More nights of hugging my pillow, oh replaying memories."
      },{
        id: 18,
        quote: "You and me, you know that we were always funny in a car crash sort of way. Watch me bruise and bleed for you."
      },{
        id: 19,
        quote: "And you tell me that it’s over, but I can’t stand here in a patch of four leaf clover. And you're restless, and I’m naked. You’ve got to get out. You can’t stand to see me shaking."
      },{
        id: 20,
        quote: "I can’t dream anymore since you left. I miss you singing me to sleep."
      },{
        id: 21,
        quote: "Go ask your mother cause she knows what you need. Left your heart open, I’m just helping it bleed."
      }]
      return knex('quotes').insert(quotes);
    });
};
