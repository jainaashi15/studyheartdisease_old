class HeartDiseaseIndicator{
    constructor(HasHeartDisease, BMI, IsSmokes, DrinksAlcohol, HasStroke, PhysicalHealth, 
        MentalHealth, HasDifficultWalking,Gender, AgeGrp, Race, 
        isDiabetic, IsPhysicallyActive, GenHealth, SleepTime, Asthma, HasKidneyDisease, HasSkinCancer ){
    this.HasHeartDisease = HasHeartDisease;
    this.BMI = BMI;
    this.IsSmokes = IsSmokes;
    this.DrinksAlcohol = DrinksAlcohol;
    this.HasStroke = HasStroke;
    this.PhysicalHealth = PhysicalHealth;
    this.MentalHealth = MentalHealth;
    this.HasDifficultWalking = HasDifficultWalking;
    this.Gender = Gender;
    this.AgeGrp = AgeGrp;
    this.Race = Race;
    this.isDiabetic = isDiabetic;
    this.IsPhysicallyActive = IsPhysicallyActive;
    this.GenHealth = GenHealth;
    this.SleepTime = SleepTime;
    this.Asthma = Asthma;
    this.HasKidneyDisease = HasKidneyDisease;
    this.HasSkinCancer = HasSkinCancer; 
    }
}

class HeartDiseaseByMaleFemale {
        constructor(count, gender, percentage) {
          this.genderCount = count;
          this.gender = gender;
          this.percentage =  percentage;                   
        }
      }
class HeartDiseaseByAgeGroup {
        constructor(ageGrpCount, ageGrp,  percentage) {
          this.ageGrpCount = ageGrpCount;
          this.ageGrp = ageGrp;      
          this.percentage =  percentage;         
        }
      }
class AllDiseases {
        constructor(diseaseCount, diseaseName, percentage) {
          this.diseaseCount = diseaseCount;
          this.diseaseName = diseaseName;          
          this.percentage =  percentage;         
        }
      }
class HeartDiseaseByOtherDisease {
        constructor(diseaseCount, percentage) {
          this.diseaseCount = diseaseCount;          
          this.percentage =  percentage;         
        }
      }
class ParallelCoordinatesIndicators{
    constructor(AgeGrp, BMI, SleepTime,Race,Gender){        
               
        this.Race = Race;
        this.Gender = Gender;
        this.AgeGrp = AgeGrp;
        this.BMI = BMI;
        this.SleepTime = SleepTime;
    }
}