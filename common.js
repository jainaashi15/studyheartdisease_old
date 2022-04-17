var getDataOnCondition = function(dataset, condition)
    {
      // console.log(dataset);
       arrHeartIndicatorData = getHeartDiseaseData(dataset);
      // console.log(arrHeartData);
       params = ["gender", "ageGroup", "AllDiseases"];
       paramsOtherDisease = ["Stroke", "DiffWalking","Diabetic","Asthma", "KidneyDisease", "SkinCancer"];
      
       if(condition == params[0])
       {
         GenderInfo =  getMaleFemaleCount(arrHeartIndicatorData);
         return GenderInfo;
       }
       else if(condition == params[1])
       {
         AgeGrpInfo = getAgeGrpCount(arrHeartIndicatorData);
         return AgeGrpInfo;
       }
       else if(condition == params[2])
       {
        AllDiseasesInfo = getOtherDiseaseCount(arrHeartIndicatorData, condition, true);
        return AllDiseasesInfo;
       }
       else if(condition == paramsOtherDisease[0] || condition == paramsOtherDisease[1] || condition == paramsOtherDisease[2]|| condition == paramsOtherDisease[3]|| condition == paramsOtherDisease[4]|| condition == paramsOtherDisease[5])
       {
        OtherDiseaseInfo = getOtherDiseaseCount(arrHeartIndicatorData,condition, false);
        return OtherDiseaseInfo;
       }
    }

    getMaleFemaleCount = function(arrData){
        totalMaleCount = 0;
        totalFemaleCount = 0;
        malePercentage= 0.0;
        femalePercentage = 0.0; 
        totalCount = arrData.length;
        var objGender = [];       
        for(var i =0 ; i < arrData.length; i++)
        {       
            if(arrData[i].Gender == "Male")
            {           
                totalMaleCount = totalMaleCount + 1;
            }
            else if(arrData[i].Gender == "Female")
            {
                totalFemaleCount= totalFemaleCount + 1;
            }
        }
        malePercentage = ((totalMaleCount/totalCount)* 100).toFixed(2);
        femalePercentage = ((totalFemaleCount/totalCount)* 100).toFixed(2);
        var objMale  = new  HeartDiseaseByMaleFemale(totalMaleCount,"Male" , malePercentage);
        var objFemale  = new  HeartDiseaseByMaleFemale(totalFemaleCount,"Female" , femalePercentage);
        objGender.push(objMale);
        objGender.push(objFemale);
       // console.log(totalMaleCount + " " + totalFemaleCount + " " + malePercentage + " " +femalePercentage);
        return objGender;
    }

getAgeGrpCount = function(arrData){
    ageGrp0Count = 0; ageGrp1Count = 0; ageGrp2Count = 0; ageGrp3Count = 0; ageGrp4Count = 0; ageGrp5Count = 0;
    ageGrp6Count = 0; ageGrp7Count = 0; ageGrp8Count = 0; ageGrp9Count = 0; ageGrp10Count = 0; ageGrp11Count = 0;ageGrp12Count = 0;
    totalCount = arrData.length;
    age = ["18-24", "25-29", "30-34","35-39","40-44","45-49","50-54","55-59","60-64", "65-69","70-74","75-79","80 or older"];
    objAgeGrpArr = [];
    for(var i =0 ; i < arrData.length; i++)
    {
        if(arrData[i].AgeGrp == age[0])
        {
            ageGrp0Count = ageGrp0Count + 1;
        }
        else if(arrData[i].AgeGrp == age[1])
        {
            ageGrp1Count = ageGrp1Count + 1;
        }
        else if(arrData[i].AgeGrp == age[2])
        {
            ageGrp2Count = ageGrp2Count + 1;
        }
        else if(arrData[i].AgeGrp == age[3])
        {
            ageGrp3Count = ageGrp3Count + 1;
        }
        else if(arrData[i].AgeGrp == age[4])
        {
            ageGrp4Count = ageGrp4Count + 1;
        }
        else if(arrData[i].AgeGrp == age[5])
        {
            ageGrp5Count = ageGrp5Count + 1;
        }
        else if(arrData[i].AgeGrp == age[6])
        {
            ageGrp6Count = ageGrp6Count + 1;
        }
        else if(arrData[i].AgeGrp == age[7])
        {
            ageGrp7Count = ageGrp7Count + 1;
        }
        else if(arrData[i].AgeGrp == age[8])
        {
            ageGrp8Count = ageGrp8Count + 1;
        }
        else if(arrData[i].AgeGrp == age[9])
        {
            ageGrp9Count = ageGrp9Count + 1;
        }
        else if(arrData[i].AgeGrp == age[10])
        {
            ageGrp10Count = ageGrp10Count + 1;
        }
        else if(arrData[i].AgeGrp == age[11])
        {
            ageGrp11Count = ageGrp11Count + 1;
        }
        else if(arrData[i].AgeGrp == age[12])
        {
            ageGrp12Count = ageGrp12Count + 1;
        }
    }

    //for(var i=0 ; i < age.length; i++)
    //{
    //    count = "ageGrp"+i+"Count";
    //    console.log("AgeGrp Count"+ count);
    //    var objAgeGrp = new HeartDiseaseByAgeGroup(count, age[0], ((count/totalCount)* 100).toFixed(2));
    //    objAgeGrpArr.push(objAgeGrp);
    //}
    var objAgeGrp1 = new HeartDiseaseByAgeGroup(ageGrp0Count, age[0], ((ageGrp0Count/totalCount)* 100).toFixed(2));
    var objAgeGrp2 = new HeartDiseaseByAgeGroup(ageGrp1Count, age[1], ((ageGrp1Count/totalCount)* 100).toFixed(2));
    var objAgeGrp3 = new HeartDiseaseByAgeGroup(ageGrp2Count, age[2], ((ageGrp2Count/totalCount)* 100).toFixed(2));
    var objAgeGrp4 = new HeartDiseaseByAgeGroup(ageGrp3Count, age[3], ((ageGrp3Count/totalCount)* 100).toFixed(2));
    var objAgeGrp5 = new HeartDiseaseByAgeGroup(ageGrp4Count, age[4], ((ageGrp4Count/totalCount)* 100).toFixed(2));
    var objAgeGrp6 = new HeartDiseaseByAgeGroup(ageGrp5Count, age[5], ((ageGrp5Count/totalCount)* 100).toFixed(2));
    var objAgeGrp7 = new HeartDiseaseByAgeGroup(ageGrp6Count, age[6], ((ageGrp6Count/totalCount)* 100).toFixed(2));
    var objAgeGrp8 = new HeartDiseaseByAgeGroup(ageGrp7Count, age[7], ((ageGrp7Count/totalCount)* 100).toFixed(2));
    var objAgeGrp9 = new HeartDiseaseByAgeGroup(ageGrp8Count, age[8], ((ageGrp8Count/totalCount)* 100).toFixed(2));
    var objAgeGrp10 = new HeartDiseaseByAgeGroup(ageGrp9Count, age[9], ((ageGrp9Count/totalCount)* 100).toFixed(2));
    var objAgeGrp11 = new HeartDiseaseByAgeGroup(ageGrp10Count, age[10], ((ageGrp10Count/totalCount)* 100).toFixed(2));
    var objAgeGrp12 = new HeartDiseaseByAgeGroup(ageGrp11Count, age[11], ((ageGrp11Count/totalCount)* 100).toFixed(2));
    var objAgeGrp13 = new HeartDiseaseByAgeGroup(ageGrp12Count, age[12], ((ageGrp12Count/totalCount)* 100).toFixed(2));
    objAgeGrpArr.push(objAgeGrp1)
    objAgeGrpArr.push(objAgeGrp2)
    objAgeGrpArr.push(objAgeGrp3)
    objAgeGrpArr.push(objAgeGrp4)
    objAgeGrpArr.push(objAgeGrp5)
    objAgeGrpArr.push(objAgeGrp6)
    objAgeGrpArr.push(objAgeGrp7)
    objAgeGrpArr.push(objAgeGrp8)
    objAgeGrpArr.push(objAgeGrp9)
    objAgeGrpArr.push(objAgeGrp10)
    objAgeGrpArr.push(objAgeGrp11)
    objAgeGrpArr.push(objAgeGrp12)
    objAgeGrpArr.push(objAgeGrp13)
    return objAgeGrpArr; 

}

getOtherDiseaseCount = function(arrData, diseaseName, isAllDiseases)
{
    strokeCount = 0; difficultWalkCount = 0; diabeticCount=0;
    asthmaCount = 0; kidneyDiseaseCount = 0; skinCancerCount = 0;
    noStrokeCount = 0; noDifficultWalkCount = 0; noDiabeticCount=0;
    noAsthmaCount = 0; noKidneyDiseaseCount = 0; noSkinCancerCount = 0;
    var objDiseaseArr = [];
    var objDisease;
    totalCount = arrData.length;
    //console.log("totalCount : " + totalCount);
    //console.log(arrData);
    for(var i =0 ; i < arrData.length; i++)
    {        
        if(arrData[i].HasStroke == "Yes")
        {
            strokeCount = strokeCount + 1;
        }
        if(arrData[i].HasStroke == "No")
        {
            noStrokeCount = noStrokeCount + 1;
        }
        if(arrData[i].HasDifficultWalking == "Yes")
        {
            difficultWalkCount = difficultWalkCount + 1;
        }
        if(arrData[i].HasDifficultWalking == "No")
        {
            noDifficultWalkCount = noDifficultWalkCount + 1;
        }
        if(arrData[i].isDiabetic == "Yes")
        {
            diabeticCount = diabeticCount + 1;
        }
        if(arrData[i].isDiabetic == "No")
        {
            noDiabeticCount = noDiabeticCount + 1;
        }
        if(arrData[i].Asthma == "Yes")
        {
            asthmaCount = asthmaCount + 1;
        }
        if(arrData[i].Asthma == "No")
        {
            noAsthmaCount = noAsthmaCount + 1;
        }
        if(arrData[i].HasKidneyDisease == "Yes")
        {
            kidneyDiseaseCount = kidneyDiseaseCount + 1;
        }
        if(arrData[i].HasKidneyDisease == "No")
        {
            noKidneyDiseaseCount = noKidneyDiseaseCount + 1;
        }
        if(arrData[i].HasSkinCancer == "Yes")
        {
            skinCancerCount = skinCancerCount + 1;
        }
        if(arrData[i].HasSkinCancer == "No")
        {
            noSkinCancerCount = noSkinCancerCount + 1;
        }
    }
    //["Stroke", "DiffWalking","Diabetic","Asthma", "KidneyDisease", "SkinCancer"];
    //var objDisease = AllDiseases(strokeCount, "Heart", ((strokeCount/totalCount)* 100).toFixed(2)); 
    //objDiseaseArr.push(objDisease); 
    if(isAllDiseases)
    {              
        var objDisease1 = new AllDiseases(strokeCount, "Stroke", ((strokeCount/totalCount)* 100).toFixed(2)); 
        objDiseaseArr.push(objDisease1);    
        var objDisease2 = new AllDiseases(difficultWalkCount, "DiffWalking", ((difficultWalkCount/totalCount)* 100).toFixed(2)); 
        objDiseaseArr.push(objDisease2);     
        var objDisease3 = new AllDiseases(diabeticCount, "Diabetic", ((diabeticCount/totalCount)* 100).toFixed(2)); 
        objDiseaseArr.push(objDisease3);
        var objDisease4 = new AllDiseases(asthmaCount, "Asthma", ((asthmaCount/totalCount)* 100).toFixed(2)); 
        objDiseaseArr.push(objDisease4);
        var objDisease5 = new AllDiseases(kidneyDiseaseCount, "KidneyDisease", ((kidneyDiseaseCount/totalCount)* 100).toFixed(2)); 
        objDiseaseArr.push(objDisease5); 
        var objDisease6 = new AllDiseases(skinCancerCount, "SkinCancer", ((skinCancerCount/totalCount)* 100).toFixed(2)); 
        objDiseaseArr.push(objDisease6); 
    }
    else{
        //console.log("getOtherDiseaseCount  " + diseaseName);
        switch(diseaseName)
        {//constructor(diseaseCount, diseaseName, percentage) {
            //((ageGrp0Count/totalCount)* 100).toFixed(2)
            case "Stroke":
                objDisease = new AllDiseases(strokeCount, diseaseName, ((strokeCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease);
                objDisease1 = new AllDiseases(noStrokeCount, "No Stroke", ((noStrokeCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease1);
                //console.log(objDiseaseArr);
                break;
            case "DiffWalking":
                objDisease = new AllDiseases(difficultWalkCount, diseaseName, ((difficultWalkCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease);
                objDisease1 = new AllDiseases(noDifficultWalkCount, "No Difficult Walk", ((noDifficultWalkCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease1); 
                break;
            case "Diabetic":
                objDisease = new AllDiseases(diabeticCount, diseaseName, ((diabeticCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease);
                objDisease1 = new AllDiseases(noDiabeticCount, "No Diabetes", ((noDiabeticCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease1);   
                break;
            case "Asthma":
                objDisease = new AllDiseases(asthmaCount, diseaseName, ((asthmaCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease);
                objDisease1 = new AllDiseases(noAsthmaCount, "No Asthma", ((noAsthmaCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease1);  
                break;
            case "KidneyDisease":
                objDisease = new AllDiseases(kidneyDiseaseCount, diseaseName, ((kidneyDiseaseCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease);
                objDisease1 = new AllDiseases(noKidneyDiseaseCount, "No Kidney Disease", ((noKidneyDiseaseCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease1);   
                break;
            case "SkinCancer":
                objDisease = new AllDiseases(skinCancerCount, diseaseName, ((skinCancerCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease);
                objDisease1 = new AllDiseases(noSkinCancerCount, "No Skin Cancer", ((noSkinCancerCount/totalCount)* 100).toFixed(2)); 
                objDiseaseArr.push(objDisease1);    
                break;
            default:
                break;
        }
    }
   
    return objDiseaseArr;

}

getHeartDiseaseData = function(dataset)
{
    arrData = [];
    //console.log("dataset - "+dataset);
    for(var i=0; i< dataset.length; i++)
    {       
     if(dataset[i].HeartDisease == 'Yes')
     {
         var objHeartDiseaseIndicator = new HeartDiseaseIndicator(dataset[i].HeartDisease,dataset[i].BMI,dataset[i].Smoking,
             dataset[i].AlcoholDrinking,dataset[i].Stroke,dataset[i].PhysicalHealth, dataset[i].MentalHealth,dataset[i].DiffWalking,
             dataset[i].Sex,dataset[i].AgeCategory,dataset[i].Race,dataset[i].Diabetic,dataset[i].PhysicalActivity,
             dataset[i].GenHealth,dataset[i].SleepTime,dataset[i].Asthma,dataset[i].KidneyDisease,dataset[i].SkinCancer);
         arrData.push(objHeartDiseaseIndicator);
     }
    }
    return arrData;
}

getDataForParallelCoordinates = function(dataset){
    arrHeartIndicatorData = getHeartDiseaseData(dataset);
   // console.log(arrHeartIndicatorData);
    arrParallelCo = [];
    console.log("getDataForParallelCoordinates");
    for(var i=0; i < arrHeartIndicatorData.length; i++)
    {        
        //constructor(AgeGrp, BMI, SleepTime,Race,Gender){ 
        var obj = new ParallelCoordinatesIndicators(arrHeartIndicatorData[i].AgeGrp, arrHeartIndicatorData[i].BMI, arrHeartIndicatorData[i].SleepTime,arrHeartIndicatorData[i].Race,arrHeartIndicatorData[i].Gender );
        arrParallelCo.push(obj);
        //arrParallelCo[i];
    }
   // console.log(arrParallelCo);
    return arrParallelCo;
}