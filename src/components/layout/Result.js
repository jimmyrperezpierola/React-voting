import React, { Component } from 'react'
import {Bar, Pie } from 'react-chartjs-2';

class Result extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData: {
                labels: ['BJP', 'BJD', 'CONGRESS', 'UTKAL BAHRAT'],
                datasets:[
                    {
                        label:'TOP',
                        data:[
                            1,
                            3,
                            2,
                            2
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        }
    }
  render() {

    return (
        <div>

            <div className="he">
                <h1>Voting Result</h1>
            </div>

            <div className="graph">
                <div className="chart">
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={40}
                        options={{
                            title: {
                                display: true,
                                text: 'Lok Sabha Election',
                                fontSize: 50
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }, scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                            layout: {
                                padding: {
                                    left: 50,
                                    right: 0,
                                    bottom: 0,
                                    top: 0
                                }
                            }
                        }}
                    />
                    <Pie
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: true,
                                text: 'Lok Sabha Election',
                                fontSize: 50
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            layout: {
                                padding: {
                                    left: 50,
                                    right: 0,
                                    bottom: 0,
                                    top: 0
                                }
                            }
                        }}
                    />
                </div>
            </div>


            <div className="winner">
                <div className="card mb-2 bg-info">
                    <div className="how-section1">
                        <div className="row">
                            <div className="col-md-6 how-img">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png" class="rounded-circle img-fluid" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h4>BJP - 50</h4>
                                <h4 className="subheading">Description Here</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="winner">
                <div className="card mb-2 bg-info">
                    <div className="how-section1">
                        <div className="row">
                            <div className="col-md-6 how-img">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ8NDRAQDhANDg0ODQ4QDxAOEA4NFRIWFhURFhMkKCggGBoxHRUVIjEjJistLi4wFx8zOjsuNygtLysBCgoKDg0OGxAQGzAmHx0wLS0tLystLS03Li0tLjUtLysrLS01LS0tLS0tLSsrLS0rLS0tLS0tLS0tLy4tLS0vLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAADAAIDAQAAAAAAAAAAAAAAAgMBBQQGBwj/xABDEAACAgEBBQUDCQUGBgMAAAABAgADBBEFEiExUQYTQXGRYZKxFBYiMjRCU3OBByNSocEVYnKCstEkM0Oi0vBEg5P/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMhEBAAIBAQYFAQcEAwAAAAAAAAECAxEEEiExMlETQWFxkSIFgaGxwdHwFCNCUjM04f/aAAwDAQACEQMRAD8A9xgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEDG8OogG8Oo9YBvDqPWAbw6j1gG8Oo9YNRvDqPWAbw6j1g1G8Oo9YNRvDqPWDUbw6iAbw6iAbw6iAbw6j1g1G8Oo9YNRvDqPWDUbw6j1g1G8Oo9YBvDqPWDUbw6j1gG8OogZgEAgEAgEAgEDyrt922te58PCc1V1MUutQ6PbYODKrc1UHhw4kg+HPTzZpmd2rlbVtUzM0pPCHQCxPEkn9TNdz2NT1PqYGQT1PrAyNep9YDDXqfWAw16n1gMNep9YDDXqfWQM8epgZ49T6wgcepgHHqYBx6n1gY49TCWDr1MBTr1PrJCnXqfWAp16n1gKSep9YGNT1PqYHbOx3ba7BsWrJdrcViFYMSzUD+NTz3R4r05ceebHlms6TybmzbVak6Wnh+T2dSCAQdQeII4gibzsswCAQCAQEtbQGB83OdST1J189Zy3mmIABAYCA4EBgJCDgQGCwGCwGCwM7sA3YBuwDdgKVgYKwEKwFIgKRJSQiApEBGED6B7LPrs/E146Y9K+iAf0nSr0w9Fj6I9obWWXEAgEAgRyfqwS+cG5nzM5bzQEBgIDgQHAkIOBAcLAcLAYLAYLCGd2QM7kA3YGN2BgrJClYSUrAQrAQiAhEBCJKU2ED3vsl9hxvya/wDTOlTph6LH0R7Q3MsuIBAIBAjk8oJfOJ5nzM5bzTIEBwIDgSEKKIDqsCgWA4WQg4WAwWAwWAbsA3YAVgKVgIVgIVkhCsJIywJkQEIgTYSUveOyX2HG/Jr/ANM6VOmHosfRHtDcyy4gEAgECOTygl85EcT5mct5oyiBRRIDqIQqogUUQKKshB1WBQLAYLAYLAzuwDdgYKwFKwEKwEZYE2WBNhJSmwgTYQJsIHuvZP7Dj/k1/CdOnTD0ePoj2huZZcQCAQCBHJ5QS+cyOJ8zOW80dRAookIVUQKKIFVWQhVVgUVYDhYDhYQYLAzuwDdgYKwFKwEKwlNlgTZYEmWBNhJSkwgSYQPc+yf2HH/Jr+E6dOmHo8XRHtDcyy4gEAgECOTygl866cT5mct5o6iQhRRAsogUUSELKIFVECgGg1PADiT4AQOtbX7bY2PqlP8AxLj+E7tY/wA/j+msz02e08+DcxbDkvxtwh1PO7aZ1p+i4pXj9GtQOH+I6mbNcFIdCmw4q84192pfauS3Fsi9vO1z/WZNyvZnjFjjlWPg1W2MpDqmRevla+nprImlZ8kThxzzrHw2+F23zqvrOtw6WIOXmNDMdtnpLBfYcNuUaeztOye3mNcQuQpx2PDe136/XmPT9Zgvs1o5cWjl+z71414u01urqHRg6sNVZSGVh1B8ZrzGnNozExOkgrAmywlJhAkwgSYSRJhCUXED3Hsp9ix/ya/hOnTph6PF0R7Q3MsuIBAIBAjk8vSCXztpxPmZy3mlFEhCqiBVRAsgkIWUQOPtPadOHUbb20HJVHFnb+FR4y1KTedIZMWK2S27V0u+3aG22K1IacbXhqStZ/xN98+wcptxGPDz5ulWMGyx9U62/nw3Gzf2e0Jocmx7j4qn7tPLqfUTHbabTyYMn2jeeiNHYMbszg1gBcao6eLr3h9TrMM5bz5tW205bc7S5y7Lx+XcU/8A41/7Su/bux+Lf/aflG7s/h2fWxaD7RUqn1EtGS8ea8Z8scrT8tLtD9n+FaCau8x246brb66+1T/QiZK7ReOfFsU2/LXnxdQ2x2FzMYFqwMlB41g74Htr5+ms2KbRW3Pg3sW3Y78J4T6tVsbbmTgP+6Yhdf3lL6lGPI6r4H2jjL3x1vHFmzYKZY+r5em9n+0dG0F0Q7loGr0sfpDqVP3hNHJimns42fZr4Z48u7bMJja6TCEpMIEXECLCSlJxA9v7KfYsf8mv4Tp06YejxdEe0NxLLiAQCAQI5PL0gl88eJ8zOW80dZCFkEAvvSpGtsYKiDVmPgIiJmdITWs2ndjnLruT21AU91RYd8MKHfgrsOGuniNehmzGz95b9Ng4/VblzcLbeNkUY65GTlXfKrmUVUVsVVeo4dB08SPOXxzW1tKxwhlwXx3vuUrG7HnLb7F7NW5BTJ2ozWsFUVUMeCr4b/t9nr0mO+WK/TRgzbVWmtMPD1/Z3OpAAAAAANAANAB0Ams58zqsohCgEBwsDO7AN2EMEQlotv8AZjGzgTYu5Z4XJoH/AF/iHn/KZKZbU5NjDtOTFy5dnmm2uzuXsywWgkorA15NeoAPhr4qf/eM3aZa5I0dfDtGPPGnn2l2rsv2zW/dozCEt4KtvJLT7fBW/kfZymvlwaca8mjtOxTT6sfLt2dsYTWc9FhCUXECLCSlJxA9t7KfYsf8lPhOnTph6PF0R7Q3EsuIBAIBAjk8vSCXzx4nzM5bzSiyEI5+0a8etmYgsq6rUGG+5PAADnz0l60m0smLFbJMRHy0THJzsmvCyhWlahcm5K94MF8K2OvPiPX2TN9NK71fZux4eHHOTHz5Rr+a2RQt+2qaQB3eJUrbgGgXQbw0HmyRE6Ypnuitppss287T/P1dmfZSWZSZVhLGqvcqrIG6jEkmz2nkP0mCLzFd2GnGWa45pHnz/ZtVEowrKIQqogUUQKAQg27IAVgIRARhJSjagYFWAII0II1BHQiExOjoXabsIra3YOitxLY5P0W/wHw8jw8ptY9o8rOls+3zH05Pn92l2P2rycFvk+UrWIh3Sj6rbX7ATzHsP8pkvhrfjVsZtkpljepwmfh3PA7Q4mSB3dqhj/03/dvr00PP9NZq2xWrzhzcmzZMfOHOcTGwIvAi8ke2dlfsWP8Akp8J06dMPSYuivtDcSy4gEAgECOTy9IJfPPifMzlPNKJCHUalqOVSLPtBz7DcH13t3j3en936uk2513Z05aOpM28Od3p3eH6/e3myBrtPPJ5hcYDyKD/AGExX/46/e1sv/Xp95djJvbZznPNa61HkQn/AIybz/aqtlnTZqR/PNudi7W+U97qu7uZN1CaatqEAO8ekx3pu6ezXzYdzT1iJ+W5SY2BZYQssCiwhVRIDgQAiBNhAmwkiTQlpdpdosPGYrdegYcCq62MD7QNdJeuK9uUM9Nmy341q4eXs/C2tUtugsHEJau9W408Ov6GWi18c6L1yZdntu/g6+/YvDCNaMiw1oHLMDWQN3Xe46eGhmX+ovrpo2v67LrFd2NZ9257M7/yDH7wksUJBPPcLHc/7d2Ycum/OjU2rTxbafzv+LnPMbAk8ke19lfsWP8AlJ8J06dMPSYuivtDcSy4gEAgECOTy9IJfPPifMzlPNKLCEto4IyKmXgr8DXZpq1bg6qQfMCWpbdnVkxZJpbXy84aTFyrsbaAtzKxUuSi0tYGDVtaoGj/AN0HTkeszzWLU0r5Ny1KZMO7jnXd4/c5uyn3NtZiH/qU1up66Kn+59JW/HFEseSNdlpPaf3HY91L5aHTWvPsfjpwLBlB/kRGblE+idridKz3q3HahslMbv8AEYh8d1tdNNRbUAd5SPEcdf0mPFuzbS3mwbNuTfdvyng5+wNr1Z1AuqPHgLE1+lW/8J/ofGRek0nSVM2G2K27LbLKMKqwhRZAoDAV2A01IGp0Gp5noINGn2ht2unNx8HdL2ZAdm0YAU1qpO83X6p9CZkrjmazbsz0wTbHbJ5R+LTYGY2VtC/P3ymDi0tRU5YrVc+ur2DwIHEa+xZe1d2kV85Zr0imKMen1TOvt6Ou7Z7T5O07/kWzAy1sSDYNVexRzYn7ifz9dJmpirjjeu2sWzUwV8TLz/nzLsvZ7sxRgoDui24j6dzDU69EH3R/OYMmWb+zSz7VfLPaOyWbtzXIx66CCpy7MXI1X7yoCQD/AJhEY/pmZ7appg+i027aw0+RQbWTZNR1RHe/OtXkEawuKtep1H8uhmSJ0/uT9zPW27E57c+VfjTV2YqAAANAAAAOQA8JrtCZ1SeQIvJHtfZX7Fj/AJSfCdOnTD0mLor7Q3EsuIBAIBAjk8vSCXzz4nzM5bzSiyEKrAxlYleRWarlDo3gfA9QfAya2ms6wtS9qTvVni0GbsFsJq83DNtr0MNaXbf1o0IKrw15HlM9cu/9NvNu49pjLE48mkRPn6tb2Z2qo2neBqqZj2bgYmvS0vvorEcuOq/rMmWn9uPRn2jDM4K96/l5/u9Gxbg666EeBDK6aEc+DAEj26cZpzGjkWjSXRNv7Pv2Pk/LsHhRYfpppqiEn6jL/AfA+HLhw128doy13bc3UwZKbTTw8nOHY9l9sEzKgMda1yuXye+3ulJ05o+h3/LgZhthms8eTWybHOOfq6e8Q5b7Yy8agLfjnJy3P0K8aq3uQpOg37SCByOvHp5yNytp4TpHqpGHHe2tbaV9dNfhjb+3suiimvHxmszLlVnREe6ugeOrDgTrwH6nzmmOszMzPBOHBjtaZtb6Y+7VwsztHlA0FnSinG3DtLJ3AyW3j62LSDrvNwIO7yPTTjaMdePry/eWSuz046RrM9MeneXHrXO2leNovQy04mr7PxHIra677rsT7dCT7AB1k/RSN3XjPOVpnFhr4UTxtzntCdVmNs3v8natiZOdlhhbQmlhWoj/AJWnIDQDXXQaAAcuKd6+kU4RCZi+bSuGNK18/wBWkfIztv2CqpRRi1kDdXhTUBy3j99ug/kOcy6UwxrPNsbuLZY3p42n5d62PsjG2ZSEQhS7Ir2uQGtsJ0Ua+Z4KJqXva8uZlzXzW1n47NXnbae+xKad6vu9q1YzsG/5laAvZ5D6OhEvFNI1ntqzUwxSJtbzrM/pDW364aikIl20crJyMipV+mMdrTobNfAboHP2+Al4+rj/AIwyx/cne10pWIifXTybrYuylw6dzXfscl77TzstPM+Uw5L78tXNmnJbXyjlDmPKMKDwIvJHtnZX7Fj/AJKfCdOnTD0mLor7Q3EsuIBAIBAjk8vSCXzx4nzM5bzSiyEKrAshkIWQwOJtnZaZdDVkAWab1NmmjJaOIIPMcZel5rOrLhyzjtr5ebW7E21Y9dlhGt1ACZeOzBPprqvehidFHUAc5lvjiJ08p5NjNgiJiPKeU/o7JhZdOXU26UtU/QtUEOoYjih685hmJrLUvS2O3Hg6d2h7Aak24BHHUnHc6foj/wBD6zZx7T5WdDB9oeWT5aarb+1dmkV2mwKOATITfU+THjp5GZPDx34x+DZnBs+bjH4NpR+03IA0fHpY9VZ0HpxlJ2WO7DP2bTytKeX+0nIcALjY40Oo7wPboeo4jQyY2aI801+zqRztLX29o9rbSY11Nad7QFMdNwDzYcdPMy3h46cZ/FljZ9nwxrP4tzsL9npJFu0X0H1jQjak/wCOzw/T1mO+0+VWvm+0PLFH3/8AjugycbFqsrrNSLiV79laEDulIJGo8CdP1mtpa06z5ufu3vMTP+TqIzsrPbZ6gI11SW51w0KVqx3vk4PPTUae3Q6zY3a03u3L927uY8UXnynhH6mXL/s+pcOoLmbRtsstfdG8K7rPrOx8OGnT26CRu78708KomnjT4lvppHD7obTYWxfk29dc3fZV3G+48dP7i9F+OnkBiyZN7hHKGvnz7/014VjlDZsZjYEXMCLGSIvCXtvZT7Fj/kp8J06dMPR4uivtDcSy4gEAgECOTy9IJfO/ifMzlvNHWQhZTAqpgWQyELKYHW+0myrktG0cDUXVj98gGveoPHTxOnMePmOOxivExuX5N3Zs1Zr4WXlPL0LsrauPtBhZWy4ucBugvvWDTTQtUhYKT5jX2GTalqcJ4wtkw3wxpPGn85+bafLMzFCteO8pr3wxVTfk5LnUroqgKg85Tdpblz/Jh3MWTp4TP3RHzzZyu1dVVSfKKXF1raLhgpbduHkzL93yPGIwzM8J4dyuy2tad2eEefKFRRsq97waMf8A4cK2RYakREJBOhflqNOPSRrkjTjzRvZ6xHGePLi4uFVst2pCYS72QzdyjUhmNI/+Qyn6tfQniektM5I148v5ovec8ROt+XPj59vdz6tvUpTdZXWBTXb3GKKwAcu4cCtajmN7hr7CfCUnHMzETz8/RjnBabREzxnjPpHq19vynNrTHcF+5Y3Zp4V123Allw0PioJAJ5fRHMy/01nXvy/dljcxzNo8+Eekf7fsG2ZjY+O1m07EL3W/KMk7xVLbBqVrC83RdeC+OnKN+1p0p5I8XJe+mGOERpHp6+ky4Fu3snaTtRsus01cFty3AUhR06cOXM8fCW8OuONb/DJGDHhjezTrPZu9h7DpwUITV7H423N9dzz/AEHs+MxZMk3a2bPbLPHl2c9jMbCkxgRcwIsZKUXMD2/sp9ix/wAmv4Tp06YejxdEe0NxLLiAQCAQI5PKCXzr4nzM5bzSimQhRTAspgVUyEKqYFVMDr+3+yVOWTbUe4uPEsB9Bz1YeB9o/nM+PPNeE8YbmDbLY/ptxhpV2jtfZfC5TfUv3m1tXd9lg4j/ADTLu4snLhLZ8PZs/Twn4/Bz8f8AaDjOCMjGdd7g25uWgj266Ss7NaOUsdvs+8dNv0cpe0+xzWte6FRW3xV8nKpv9Sg4E+cr4WXXVT+m2nXXz90sztHsl1sAe5e+YG9qkdHvUfcZzx3fYCOnKTGLLH3Jrs20RMcI4ctfJO3t7h1qgx8V27lStO8K6gi8tFI3iBwEmNnvPOVo2DLPVbnzcb5y7Wz+GHR3SH76rrp/9jfR9BJ8LFTqlb+m2fF/yTr/ADtDl7O7El37/aVzZDnnWHYjyaw8T5DSVttGkaUjRjybdpG7ijSP55O201JUgrrVURRoqqAoA8prTMzxloTM2nWWGaEJsYSixgSYwJMZKUXMD3Dsp9ix/wAmv4Tp06YejxdEe0NzLLiAQCAQI5PKCXzprxPmZy3mjqYFFMhCqmBRTAqrSEKq0CitAorQhxMnZGLcdbaKnJ5sUUN73OWjJaOUstc2SvK0uC/ZDZ7HXuNPKy0D4y/j37ssbbmj/L8ma+x+z1Ovca+dlpHxjx790Ttuaf8AL8nPxtj4lJBrx6VI5N3alh+p4yk5LTzlitnyW52lzi0qxlLQELQJs0JSZoEmMCbGSlJjAkxge5dk/sOP+TX8J06dMPR4uiPaG5llxAIBAIEcnlBL5yJ4nzM5bzR1MCimQg6mBVTAopgUVpCFVaA4aAwaAwaBnehA3oGC0JKWgIWgIzQJs0CTGSlNjAmxgTYwPdOyf2HH/Jr+E6dOmHo8XRHtDcyy4gEAgECOTygl84nmfMzlvNMgwKKYDgyEKKYFFaBQNAcNIQcNAYNAYNAzvQDegYLQFLQFLQJloCEyUps0CbGAhMCbGSl7v2S+w4/5Nf8ApnSp0w9Fj6I9obmWXEAgEAgRyeUEvnBuZ8zOW80yDAYGA4MBwZCFA0Bw0Bw0Bg0Bg0hBt6Ab0A3oGC0DBaApaSkhaAhaAhMBCYCEyUpsYHvXZL7Djfk1/wCmdKnTD0WPoj2huZZcQCAQCBHKP0YHzg3M+ZnLeaEDIMBgYDgwHBkIMGgOGgMGgMGgZ3oBvQDegG9AUtAwWgIWgKTAQmAhMlJSYCMYHvfZA64GMetFR/QqJ0q9MPRY+iPaG6llxAIBAIEshdVMDxDtnsB8K97UUnHscsGA4UsTqUboNeR/Tz0suKazrHJx9q2aaWm1eU/g67rMDSGsDIMBg0Bg0Bw0hBg0DIaAwaBnegG9AN6Ab0DBaApaApaApaApaSkpaApMDZdntiWbQuCICKgw7+7wVfFVPi/w11My48c3n0bWz7POSdZ5PeNm0iutUUbqoqqqjkFA0Am+7blwCAQCAQMEQNbnYIfXhrrzHUQNC3ZvHB4Y9Q8q1Eru17KeHTtHwX5vUfgV+4I3K9jw6do+B83qPwK/cEblex4dO0fA+b1P4FfuCNyvY8OnaPhn5v0/gV+4I3K9jw6do+B836fwK/cEblex4VO0fA+b9P4FfuCNyvY8KnaPgfN+n8Cv3BG5XseFTtHwPm/T+BX7gjcr2PCp2j4H9gU/gV+4I3K9jwqdo+B/YFP4FfuCNyvY8KnaPgf2BT+BX7gjcr2PCp2j4H9gU/gV+4I3K9jwqdo+B836fwK/cEblex4VO0fA+b9P4FfuCNyvY8KnaPgfN+n8Cv3BG5XseFTtHwPm/T+BX7gjcr2PCp2j4Hzfp/Ar9wRuV7Hh07R8MfN6j8Cv3BG5XseHTtHwyOzlB549R861Mblex4dO0fDdbO2aKwAFCqvBVUBQB0A8JZdt1GggZgEAgEAgEAgKUEA7sdIB3Y6QDux0gHdjpAO7HSAd2OkA7sdIB3Y6QDux0gHdjpAO7HSAd2OkA7sdIB3Y6QDux0gHdjpAO7HSAd2OkACDpAYCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCB//2Q==" class="rounded-circle img-fluid" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h4>BJD - 40</h4>
                                <h4 className="subheading">Description Here</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="winner">
                <div className="card mb-2 bg-info">
                    <div className="how-section1">
                        <div className="row">
                            <div className="col-md-6 how-img">
                                <img src="https://www.logolynx.com/images/logolynx/f9/f9e95a5bf59063e33a6a1f81ac65900b.jpeg" class="rounded-circle img-fluid" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h4>CONGRESS - 25</h4>
                                <h4 className="subheading">Description Here</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
    )
  }
}

export default Result;