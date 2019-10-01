let colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

export const value = (arr) => parseInt(arr.map(color => colors.indexOf(color)).slice(0,2).join(""))
