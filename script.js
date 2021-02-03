function change() {
    const mm = document.getElementById("mm").style.gridArea;
    const ft = document.getElementById("ft").style.gridArea;
    const ac = document.getElementById("ac").style.gridArea;
    const tc = document.getElementById("tc").style.gridArea;
    const ex = document.getElementById("ex").style.gridArea;
    let new_mm;
    let new_ft;
    let new_ac;
    let new_tc;
    let new_ex;
    const news = [new_mm, new_ft, new_ac, new_tc, new_ex];
    while (news[0] == mm || news[1] == ft || news[2] == ac || news[3] == tc || news[4] == ex) {
        let mm_num;
        let ft_num;
        let ac_num;
        let tc_num;
        let ex_num;
        const nums = [mm_num, ft_num, ac_num, tc_num, ex_num];
        for (i = 0; i < nums.length; i++) {
            while (nums[i] == num[i+1] || nums[i] == num[i+2] || nums[i] == num[i+3] || nums[i] == num[i+4] || nums[i] == num[i-1] || nums[i] == num[i-2] || nums[i] == num[i-3] || nums[i] == num[i-4]) {
              nums[i] = Math.floor(Math.random()*5);
            };
        };
        for (i = 0; i < nums.length; i++) {
            nums[i] == 0? news[i] = "3 / 1 / 4 / 2"
            :nums[i] == 1? news[i] = "3 / 3 / 4 / 4"
            :nums[i] == 2? news[i] = "4 / 2 / 5 / 3"
            :nums[i] == 3? news[i] = "5 / 1 / 6 / 2"
            :news[i] = "5 / 3 / 6 / 4";
        };
    };
    document.getElementById("mm").style.gridArea = news[0];
    document.getElementById("ft").style.gridArea = news[1];
    document.getElementById("ac").style.gridArea = news[2];
    document.getElementById("tc").style.gridArea = news[3];
    document.getElementById("ex").style.gridArea = news[4];

    console.log(news[0]);
};

document.getElementById("mm").onmouseover = change;
document.getElementById("ft").onmouseover = change;
document.getElementById("ac").onmouseover = change;
document.getElementById("tc").onmouseover = change;
document.getElementById("ex").onmouseover = change;

document.getElementById("tt").onmouseover = () => document.getElementById("ttFig").style.visibility = "visible";
document.getElementById("tt").onmouseleave = () => document.getElementById("ttFig").style.visibility = "hidden";