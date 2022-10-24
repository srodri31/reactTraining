export const isAnAdult = (name = "Usted", age = 0) => {
    const _name = name || "Usted"
    if (age < 18 ) return _name+" es menor de edad"
    if (age >= 18 ) return _name+" es mayor de edad"
}