/**
 * template literal
 */

type Aimyong = 'Aimyong';


//uppercase
type AimyongUpper = Uppercase<Aimyong>;

//lowercase
type AimyongLower = Lowercase<AimyongUpper>;

//capitalize : 맨 앞글자 강조
type AimyongCapitalize = Capitalize<AimyongLower>;

//uncapitalize
type AimyongUnCapitalize = Uncapitalize<AimyongCapitalize>;