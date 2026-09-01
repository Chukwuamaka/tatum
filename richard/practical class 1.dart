void main(){
  int score = 72;

  String grade;

  if (score >= 70){
    grade = 'A';
  } else if(score >= 60){
    grade = 'B';
  }
  else{
    grade = 'F';
  }

  print (grade);
}